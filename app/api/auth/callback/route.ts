import { NextRequest, NextResponse } from "next/server";
import { discordOauth, authConfig } from "@/lib/auth/config";
import { getSession } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    console.error("Discord OAuth Error: No code provided in callback");
    return NextResponse.redirect(new URL("/?error=oauth_failed", request.url));
  }

  try {
    const tokenResponse = await discordOauth.tokenRequest({
      code: code,
      scope: ["identify", "guilds", "guilds.members.read"],
      grantType: "authorization_code",
    });

    const { access_token: accessToken, refresh_token: refreshToken } =
      tokenResponse;

    const user = await discordOauth.getUser(accessToken);
    if (!user || !user.id) {
      throw new Error("Failed to fetch user information from Discord.");
    }

    let isMember = false;
    try {
      console.log(
        `Attempting to get member info for user ${user.id} in guild ${authConfig.requiredGuildId}...`
      );
      const member = await discordOauth.getGuildMember(
        accessToken,
        authConfig.requiredGuildId
      );

      console.log("Fetched Member Data:", JSON.stringify(member, null, 2));

      if (member && member.user?.id === user.id) {
        console.log("Member roles reported by API:", member.roles);
        if (authConfig.requiredRoleId) {
          console.log(
            `Checking for required role ID: ${authConfig.requiredRoleId}`
          );
          isMember = member.roles.includes(authConfig.requiredRoleId);
          console.log(`Role check result (isMember): ${isMember}`);
        } else {
          isMember = true;
        }
      }

      if (!isMember) {
        console.warn(
          `User ${user.username}#${user.discriminator} (${
            user.id
          }) is not authorized (guild: ${authConfig.requiredGuildId}, role: ${
            authConfig.requiredRoleId || "N/A"
          })`
        );
        const inviteLink = process.env.DISCORD_GUILD_INVITE;
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || new URL("/app", request.url).origin;
        const redirectUrl = new URL("/app/unauthorized", baseUrl);
        if (inviteLink) {
          redirectUrl.searchParams.set("invite", inviteLink);
        }
        console.log(
          `Redirecting unauthorized user to: ${redirectUrl.toString()}`
        );
        return NextResponse.redirect(redirectUrl);
      }
    } catch (guildError) {
      console.error(
        `Error checking guild membership for user ${user.id}:`,
        guildError
      );
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || new URL("/app", request.url).origin;
      const redirectUrl = new URL("/app/unauthorized", baseUrl);
      let errorCode = "unauthorized_check_failed"; 

      if (guildError instanceof Error && "code" in guildError) {
        if (guildError.code === 10007) {
          errorCode = "unauthorized"; 
        } else if (guildError.code === 10004) {
          errorCode = "config_error";
        } else if (guildError.code === 50001) {
          errorCode = "config_error";
        }
      }
      redirectUrl.searchParams.set("error", errorCode);
      const inviteLink = process.env.DISCORD_GUILD_INVITE;
      if (inviteLink) {
        redirectUrl.searchParams.set("invite", inviteLink);
      }
      console.log(
        `Redirecting user after guild check error to: ${redirectUrl.toString()}`
      );
      return NextResponse.redirect(redirectUrl);
    }

    const session = await getSession();
    session.isLoggedIn = true;
    session.accessToken = accessToken;
    session.refreshToken = refreshToken;
    session.userId = user.id;
    session.username = user.username;
    session.discriminator = user.discriminator;
    session.avatar = user.avatar ?? null;
    session.hasRequiredRole = isMember;
    session.roleCheckedAt = Date.now();

    await session.save();

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || new URL("/app", request.url).origin;
    return NextResponse.redirect(new URL("/app", baseUrl));
  } catch (error) {
    console.error("Discord OAuth Callback Error:", error);
    let errorQuery = "oauth_failed";
    if (error instanceof Error && error.message.includes("invalid_grant")) {
      errorQuery = "invalid_grant"; 
    }
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || new URL("/app", request.url).origin;
    return NextResponse.redirect(new URL(`/?error=${errorQuery}`, baseUrl));
  }
}

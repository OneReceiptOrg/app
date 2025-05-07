import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions } from "./session-config"; 
import { NextResponse } from "next/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { ROLE_REVALIDATION_INTERVAL_MS } from "../constants";

interface UserSession {
  isLoggedIn?: boolean;
  userId?: string;
  hasRequiredRole?: boolean;
  roleCheckedAt?: number; 
}

export async function protectApiRoute(
  cookieStore: ReadonlyRequestCookies
): Promise<NextResponse | { authorized: true; userId: string }> {
  console.log("API Auth Helper: Checking authentication and authorization...");
  try {
    const session = await getIronSession<UserSession>(cookieStore, sessionOptions);

    if (!session?.isLoggedIn) {
      console.log("API Auth Helper: User not logged in.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const discordUserId = session.userId;
    if (!discordUserId) {
      console.error("API Auth Helper: Session valid but missing Discord user ID.");
      return NextResponse.json({ error: "Authentication error" }, { status: 500 });
    }

    const now = Date.now();
    const lastCheck = session.roleCheckedAt ?? 0;
    const needsRevalidation = now - lastCheck > ROLE_REVALIDATION_INTERVAL_MS;
    let userHasRequiredRole = session.hasRequiredRole;

    if (userHasRequiredRole === undefined || needsRevalidation) {
      console.log(
        `API Auth Helper: Checking Discord role for ${discordUserId}. Reason: ${
          userHasRequiredRole === undefined ? "Initial check" : "Revalidation needed"
        }`
      );

      const guildId = process.env.REQUIRED_GUILD_ID!;
      const botToken = process.env.DISCORD_BOT_TOKEN!;
      const requiredRoleId = process.env.REQUIRED_ROLE_ID!;

      if (!guildId || !botToken || !requiredRoleId) {
        console.error("API Auth Helper: Missing required Discord environment variables.");
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
      }

      try {
        const res = await fetch(
          `https://discord.com/api/v10/guilds/${guildId}/members/${discordUserId}`,
          {
            headers: { Authorization: `Bot ${botToken}` },
            signal: AbortSignal.timeout(5000), 
          }
        );

        if (!res.ok) {
          console.warn(
            `API Auth Helper: Discord API error (${res.status}) for ${discordUserId}:`,
            await res.text().catch(() => "(Failed to read error body)")
          );
          userHasRequiredRole = false; 
        } else {
          const member = await res.json();
          userHasRequiredRole = member.roles.includes(requiredRoleId);
        }

        session.hasRequiredRole = userHasRequiredRole;
        session.roleCheckedAt = now;
        
        try {
          await session.save();
        } catch (saveError) {
          console.error("API Auth Helper: Error saving session:", saveError);
        }
        
        console.log(
          `API Auth Helper: Role check result for ${discordUserId}: ${userHasRequiredRole}`
        );
      } catch (fetchError) {
        console.error(
          `API Auth Helper: Error fetching Discord member data for ${discordUserId}:`,
          fetchError
        );
        userHasRequiredRole = false; 
        session.hasRequiredRole = false;
        session.roleCheckedAt = now;
        try {
          await session.save();
        } catch (saveError) {
          console.error("API Auth Helper: Failed to save session after fetch error:", saveError);
        }
      }
    }

    if (!userHasRequiredRole) {
      console.log(`API Auth Helper: User ${discordUserId} lacks required role.`);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    console.log(`API Auth Helper: Access granted for user ${discordUserId}.`);
    return { authorized: true, userId: discordUserId };
  } catch (sessionError) {
    console.error("API Auth Helper: Session initialization error:", sessionError);
    return NextResponse.json({ error: "Authentication system error" }, { status: 500 });
  }
} 
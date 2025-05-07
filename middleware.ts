import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/auth/session-config";
import { cookies } from "next/headers";
import { ROLE_REVALIDATION_INTERVAL_MS } from "./lib/constants";

const publicPaths = [
  "/app/api/auth/login",
  "/app/api/auth/callback",
  "/app/api/auth/logout",
  "/app/favicon.ico",
  "/app/unauthorized",
  // "/app/emulator/icons/",
  // "/app/emulator/manifests/",
  "/emulator/icons/",
  "/emulator/manifests/",
];

interface UserSession {
  isLoggedIn?: boolean;
  userId?: string;
  hasRequiredRole?: boolean;
  roleCheckedAt?: number;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  if (isPublicPath || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    console.log(
      "Middleware: Authentication verification is temporarily disabled in development."
    );
    return NextResponse.next();
  }

  const unauthorizedRedirect = (reason: string) => {
    console.log(`Middleware: Unauthorized - ${reason}`);
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  };

  try {
    const cookieStore = await cookies();
    const session = await getIronSession<UserSession>(
      cookieStore,
      sessionOptions
    );

    if (!session?.isLoggedIn) {
      const loginPath = "/app/api/auth/login";
      const baseUrl = request.nextUrl.origin;
      const absoluteLoginUrl = new URL(loginPath, baseUrl);

      return NextResponse.redirect(absoluteLoginUrl, { status: 302 });
    }

    const discordUserId = session.userId;
    if (!discordUserId) {
      return unauthorizedRedirect("Session missing Discord user ID");
    }

    const now = Date.now();
    const lastCheck = session.roleCheckedAt ?? 0;
    const needsRevalidation = now - lastCheck > ROLE_REVALIDATION_INTERVAL_MS;

    if (session.hasRequiredRole === undefined || needsRevalidation) {
      console.log(
        `Middleware: Checking Discord role for ${discordUserId}. Reason: ${
          session.hasRequiredRole === undefined
            ? "Initial check"
            : "Revalidation needed"
        }`
      );

      const guildId = process.env.REQUIRED_GUILD_ID!;
      const botToken = process.env.DISCORD_BOT_TOKEN!;
      const requiredRoleId = process.env.REQUIRED_ROLE_ID!;

      if (!guildId || !botToken || !requiredRoleId) {
        console.error(
          "Middleware: Missing required Discord environment variables."
        );
        return unauthorizedRedirect("Server configuration error.");
      }

      try {
        const res = await fetch(
          `https://discord.com/api/v10/guilds/${guildId}/members/${discordUserId}`,
          {
            headers: {
              Authorization: `Bot ${botToken}`,
            },
          }
        );

        if (!res.ok) {
          console.warn(
            `Discord API error (${res.status}) for ${discordUserId}:`,
            await res.text()
          );
          session.hasRequiredRole = false;
          session.roleCheckedAt = now;
          await session.save();
          return unauthorizedRedirect(`Discord API error (${res.status})`);
        }

        const member = await res.json();
        const userHasRole = member.roles.includes(requiredRoleId);

        session.hasRequiredRole = userHasRole;
        session.roleCheckedAt = now;
        await session.save();

        if (!userHasRole) {
          return unauthorizedRedirect(
            "User does not have the required Discord role"
          );
        }

        console.log(
          `Middleware: Role check successful for ${discordUserId}. Role present: ${userHasRole}`
        );
      } catch (fetchError) {
        console.error(
          `Middleware: Error fetching Discord member data for ${discordUserId}:`,
          fetchError
        );
        session.hasRequiredRole = false;
        session.roleCheckedAt = now;
        await session.save();
        return unauthorizedRedirect("Failed to verify role with Discord");
      }
    } else if (!session.hasRequiredRole) {
      return unauthorizedRedirect(
        "User confirmed to lack required role (cached)"
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.url;
    const loginUrl = new URL("/app/api/auth/login", baseUrl);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (public auth API routes)
     * - api (other API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (public login page/route)
     * - unauthorized (public unauthorized page/route)
     */
    "/((?!api/auth/|api/|_next/static|_next/image|favicon.ico|login|unauthorized).*)",
    "/",
  ],
};

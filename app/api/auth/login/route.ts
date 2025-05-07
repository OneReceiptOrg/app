import { discordOauth } from "@/lib/auth/config";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const scope = ["identify", "guilds", "guilds.members.read"];
  const authUrl = discordOauth.generateAuthUrl({
    scope: scope,
  });

  return NextResponse.redirect(authUrl);
}

import { NextResponse } from "next/server";
import { getSession, destroySession } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function GET() {
  const session = await getSession();
  await destroySession(session);
  return NextResponse.redirect(
    new URL(
      "/?logged_out=true",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    )
  );
}

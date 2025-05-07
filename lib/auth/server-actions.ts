"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "./session-config";
import { getUserReceiptCount } from "@/lib/user-credits";
import { MAX_RECEIPTS_PER_DAY } from "@/lib/constants";

/**
 * Server action to refresh user credits.
 * This is safe to call from server components.
 */
export async function refreshUserCredits() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    
    if (!session.isLoggedIn || !session.userId) {
      return { success: false, message: "User not logged in" };
    }
    
    const usedToday = await getUserReceiptCount(session.userId);
    session.remainingCredits = Math.max(0, MAX_RECEIPTS_PER_DAY - usedToday);
    session.creditsLastUpdated = Date.now();
    await session.save();
    
    return { 
      success: true, 
      remainingCredits: session.remainingCredits 
    };
  } catch (error) {
    console.error("Failed to refresh user credits:", error);
    return {
      success: false,
      message: "Failed to refresh credits"
    };
  }
}

/**
 * Get current user data including credits.
 * This is for use in server components and API routes.
 */
export async function getCurrentUserData() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    
    if (!session.isLoggedIn) {
      return { isLoggedIn: false };
    }
    
    if (shouldUpdateCredits(session) && session.userId) {
      try {
        const usedToday = await getUserReceiptCount(session.userId);
        session.remainingCredits = Math.max(0, MAX_RECEIPTS_PER_DAY - usedToday);
        session.creditsLastUpdated = Date.now();
      } catch (error) {
        console.error("Failed to get credits count:", error);
      }
    }
    
    return {
      isLoggedIn: session.isLoggedIn,
      userId: session.userId,
      username: session.username,
      avatar: session.avatar,
      remainingCredits: session.remainingCredits
    };
  } catch (error) {
    console.error("Error getting user data:", error);
    return { isLoggedIn: false };
  }
}

function shouldUpdateCredits(session: SessionData): boolean {
  if (session.remainingCredits === undefined || session.creditsLastUpdated === undefined) {
    return true;
  }

  const now = Date.now();
  const thirtySecondsAgo = now - 30 * 1000;
  return session.creditsLastUpdated < thirtySecondsAgo;
} 
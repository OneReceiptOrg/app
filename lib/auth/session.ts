import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "./session-config";
import { getUserReceiptCount } from "@/lib/user-credits";
import { MAX_RECEIPTS_PER_DAY } from "@/lib/constants";

export const defaultSession: Omit<SessionData, "isLoggedIn"> & {
  isLoggedIn: false;
} = {
  accessToken: "",
  refreshToken: "",
  userId: "",
  username: "",
  discriminator: "",
  avatar: null,
  isLoggedIn: false as const,
  remainingCredits: null,
  creditsLastUpdated: 0,
};

export type Session = IronSession<SessionData>;

/**
 * Gets the current session from the request cookies.
 * This function READS but DOESN'T MODIFY the session.
 */
export async function getSession(): Promise<Session> {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.accessToken = defaultSession.accessToken;
    session.refreshToken = defaultSession.refreshToken;
    session.userId = defaultSession.userId;
    session.username = defaultSession.username;
    session.discriminator = defaultSession.discriminator;
    session.avatar = defaultSession.avatar;
  }

  if (session.isLoggedIn && session.userId && shouldUpdateCredits(session)) {
    try {
      const usedToday = await getUserReceiptCount(session.userId);
      session.remainingCredits = Math.max(0, MAX_RECEIPTS_PER_DAY - usedToday);
      session.creditsLastUpdated = Date.now();
    } catch (error) {
      console.error("Failed to get credits count:", error);
    }
  }

  return session;
}

/**
 * Destroys the current session.
 * MUST ONLY be called in a Route Handler.
 */
export async function destroySession(session: Session): Promise<void> {
  session.destroy();
  await session.save();
}

function shouldUpdateCredits(session: SessionData): boolean {
  if (session.remainingCredits === undefined || session.creditsLastUpdated === undefined) {
    return true;
  }

  const now = Date.now();
  const thirtySecondsAgo = now - 30 * 1000;
  return session.creditsLastUpdated < thirtySecondsAgo;
}

/**
 * Updates session with fresh credit information.
 * MUST ONLY be called in a Route Handler.
 */
export async function updateSessionWithCredits(session: Session): Promise<void> {
  if (!session.isLoggedIn || !session.userId) return;

  try {
    const usedToday = await getUserReceiptCount(session.userId);
    session.remainingCredits = Math.max(0, MAX_RECEIPTS_PER_DAY - usedToday);
    session.creditsLastUpdated = Date.now();
    await session.save();
  } catch (error) {
    console.error("Failed to update credits in session:", error);
  }
}

/**
 * Explicitly refresh credits and save to session.
 * MUST ONLY be called in a Route Handler.
 */
export async function refreshSessionCredits(): Promise<Session> {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  
  if (session.isLoggedIn && session.userId) {
    await updateSessionWithCredits(session);
  }
  
  return session;
}

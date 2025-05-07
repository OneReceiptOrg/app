import { SessionOptions } from "iron-session";

const authSecret = process.env.AUTH_SECRET;

if (!authSecret) {
  throw new Error("Missing required Auth environment variable: AUTH_SECRET.");
}

export const sessionOptions: SessionOptions = {
  password: authSecret,
  cookieName: "discord-auth-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true, 
    sameSite: "lax", 
  },
};

export interface SessionData {
  accessToken: string;
  refreshToken: string; 
  userId: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  isLoggedIn: boolean; 
  hasRequiredRole?: boolean; 
  roleCheckedAt?: number; 
  remainingCredits?: number | null;
  creditsLastUpdated?: number;
  save?: () => Promise<void>; 
}


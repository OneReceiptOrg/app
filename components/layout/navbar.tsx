"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ReceiptText, Loader2 } from "lucide-react";
import { ADMIN_USER_IDS } from "@/lib/constants";

interface UserSession {
  isLoggedIn: boolean;
  userId?: string;
  username?: string;
  avatar?: string | null;
  remainingCredits?: number | null;
}

export default function Navbar() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState<number | null>(null);
  const isAdmin = userSession?.userId
    ? ADMIN_USER_IDS.includes(userSession.userId)
    : false;

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch("/app/api/auth/session");
        if (!res.ok) {
          throw new Error("Failed to fetch session");
        }
        const data: UserSession = await res.json();
        setUserSession(data);
        setCredits(data.remainingCredits ?? null);
      } catch (error) {
        console.error("Error fetching user session:", error);
        setUserSession({ isLoggedIn: false });
      } finally {
        setLoading(false);
      }
    }

    fetchSession();
  }, []);

  useEffect(() => {
    if (isAdmin || !userSession?.isLoggedIn) return;

    const handleStart = () => {
      if (typeof credits === "number" && credits > 0) {
        setCredits((prev) => Math.max(0, (prev ?? 1) - 1));
      }
    };

    const handleFail = () => {
      if (typeof credits === "number") {
        setCredits((prev) => Math.min(5, (prev ?? 0) + 1));
      }
    };

    window.addEventListener("receipt:generation-start", handleStart);
    window.addEventListener("receipt:generation-failed", handleFail);

    return () => {
      window.removeEventListener("receipt:generation-start", handleStart);
      window.removeEventListener("receipt:generation-failed", handleFail);
    };
  }, [credits, isAdmin, userSession?.isLoggedIn]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border/30 bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-1 relative">
            <span className="font-bold text-xl tracking-tight text-brand-purple">
              One<span className="text-white">Receipt</span>
            </span>
          </Link>
        </div>

        <div>
          {loading ? (
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          ) : !userSession?.isLoggedIn ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-brand-purple/40 hover:bg-brand-purple/10 hover:text-brand-purple"
            >
              <Link href="/api/auth/login">Sign In</Link>
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              {(typeof credits === "number" || isAdmin) && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                  <ReceiptText className="h-3.5 w-3.5" />
                  <span>{isAdmin ? "∞" : `${credits} / 5`}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                {userSession.avatar && userSession.userId && (
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={`https://cdn.discordapp.com/avatars/${userSession.userId}/${userSession.avatar}.png`}
                      alt="User Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="hidden sm:block text-sm">
                  <span className="font-medium">{userSession.username}</span>
                  <Link
                    href="/app/api/auth/logout"
                    className="ml-3 text-xs text-muted-foreground hover:text-brand-purple transition-colors"
                    prefetch={false}
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

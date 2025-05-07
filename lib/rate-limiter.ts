import Redis from "ioredis";
import { NextResponse } from "next/server";
import { ADMIN_USER_IDS } from "@/lib/constants";

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  console.warn("REDIS_URL environment variable is not set. Rate limiting may not function correctly.");
}
const redis = new Redis(redisUrl || "redis://localhost:6379");

function getCurrentUtcDate() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0"); 
  const day = String(now.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

interface RateLimitResult {
  allowed: boolean;
  response?: NextResponse;
  error?: string;
}


export async function checkRateLimit(
  userId: string,
  limitKeyPrefix: string,
  limit: number
): Promise<RateLimitResult> {
  if (ADMIN_USER_IDS.includes(userId)) {
    return { allowed: true };
  }

  const currentDate = getCurrentUtcDate(); 
  const rateLimitKey = `${limitKeyPrefix}:${userId}:${currentDate}`;
  const secondsInADay = 24 * 60 * 60; 

  try {
    const currentCount = await redis.incr(rateLimitKey);

    if (currentCount === 1) {
      await redis.expire(rateLimitKey, secondsInADay);
    }

    if (currentCount > limit) {
      console.warn(`Rate limit exceeded for user ${userId} (Key: ${rateLimitKey}). Count: ${currentCount}`);
      return {
        allowed: false,
        response: NextResponse.json(
          {
            error: "Rate limit exceeded",
            message: `You have reached the maximum limit of ${limit} actions per day.`,
          },
          { status: 429 } 
        ),
      };
    }

    console.log(`User ${userId} request count for ${currentDate} (Key: ${rateLimitKey}): ${currentCount}/${limit}`);
    return { allowed: true };

  } catch (redisError) {
    console.error(`Redis error during rate limiting check for key ${rateLimitKey}:`, redisError);
    return {
      allowed: false,
      response: NextResponse.json(
        { error: "Failed to check rate limit", details: "Could not connect to usage tracking service." },
        { status: 500 }
      ),
      error: redisError instanceof Error ? redisError.message : "Unknown Redis error",
    };
  }
} 
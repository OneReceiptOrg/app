import Redis from "ioredis";
import { MAX_RECEIPTS_PER_DAY, ADMIN_USER_IDS } from "./constants";

const redisUrl = process.env.REDIS_URL;
const redis = new Redis(redisUrl || "redis://localhost:6379");

function getCurrentUtcDate() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function getUserReceiptCount(userId: string): Promise<number> {
  if (ADMIN_USER_IDS.includes(userId)) {
    return 0;
  }

  const currentDate = getCurrentUtcDate();
  const rateLimitKey = `receipt_limit:${userId}:${currentDate}`;
  
  try {
    const count = await redis.get(rateLimitKey);
    return count ? parseInt(count, 10) : 0;
  } catch (error) {
    console.error(`Error fetching receipt count for user ${userId}:`, error);
    return 0;
  }
}

export async function getRemainingReceiptCredits(userId: string): Promise<number> {
  if (!userId) return 0;
  
  if (ADMIN_USER_IDS.includes(userId)) {
    return MAX_RECEIPTS_PER_DAY;
  }
  
  const usedToday = await getUserReceiptCount(userId);
  return Math.max(0, MAX_RECEIPTS_PER_DAY - usedToday);
} 
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export type RateLimitResult = {
  success: boolean;
  /** Seconds until the caller may retry. Only meaningful when success is false. */
  retryAfter: number;
};

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

/**
 * Two windows stacked: a short one to stop rapid-fire abuse, and a daily one so
 * a single visitor cannot burn the whole Gemini free-tier quota.
 */
const limiters = url && token
  ? (() => {
      const redis = new Redis({ url, token });
      return {
        burst: new Ratelimit({
          redis,
          limiter: Ratelimit.slidingWindow(5, "1 m"),
          prefix: "chat:burst",
          analytics: false,
        }),
        daily: new Ratelimit({
          redis,
          limiter: Ratelimit.slidingWindow(40, "1 d"),
          prefix: "chat:daily",
          analytics: false,
        }),
      };
    })()
  : null;

export const rateLimitEnabled = limiters !== null;

export async function checkRateLimit(identifier: string): Promise<RateLimitResult> {
  if (!limiters) {
    return { success: true, retryAfter: 0 };
  }

  const [burst, daily] = await Promise.all([
    limiters.burst.limit(identifier),
    limiters.daily.limit(identifier),
  ]);

  const blocked = [burst, daily].find((result) => !result.success);
  if (!blocked) {
    return { success: true, retryAfter: 0 };
  }

  const retryAfter = Math.max(1, Math.ceil((blocked.reset - Date.now()) / 1000));
  return { success: false, retryAfter };
}

/**
 * Vercel populates x-forwarded-for; the first entry is the client. Falls back to
 * a shared bucket so a missing header fails closed rather than opening a hole.
 */
export function getClientId(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip");
  return ip || "unknown";
}

// Rate limiter that prefers Redis (for multi-instance safety) but falls back to
// an in-memory Map for local development. The primary function `checkRateLimit`
// is async to accommodate Redis operations. Callers may `await` it.
import type { Redis } from 'ioredis';

let redisClient: Redis | null = null;
let redisInitTried = false;

async function tryInitRedis() {
  if (redisInitTried) return;
  redisInitTried = true;
  try {
    // Dynamic import so the module is only loaded when REDIS_URL is configured.
    const mod = await import('ioredis').catch(() => null);
    if (!mod) {
      redisClient = null;
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IORedisAny = (mod as any).default ?? mod;
    const url = process.env.REDIS_URL;
    if (url) {
      redisClient = new IORedisAny(url);
    }
  } catch (err) {
    redisClient = null;
  }
}

const attempts = new Map<string, number[]>();

export async function checkRateLimit(identifier: string, maxAttempts = 5, windowMs = 60_000): Promise<boolean> {
  await tryInitRedis();
  if (redisClient) {
    const key = `rl:${identifier}`;
    const windowSec = Math.ceil(windowMs / 1000);
    try {
      const current = await redisClient.incr(key);
      if (current === 1) {
        await redisClient.expire(key, windowSec);
      }
      return current <= maxAttempts;
    } catch (err) {
      // On Redis errors, fall back to memory limiter below
      // (do not throw so the API remains resilient)
    }
  }

  // In-memory fallback
  const now = Date.now();
  const arr = attempts.get(identifier) || [];
  const recent = arr.filter((ts) => now - ts < windowMs);
  if (recent.length >= maxAttempts) return false;
  recent.push(now);
  attempts.set(identifier, recent);
  return true;
}

export async function resetRateLimit(identifier: string) {
  await tryInitRedis();
  if (redisClient) {
    try {
      await redisClient.del(`rl:${identifier}`);
      return;
    } catch (_) {
      // fall through to memory
    }
  }
  attempts.delete(identifier);
}

export function getAttempts(identifier: string) {
  const arr = attempts.get(identifier) || [];
  return arr.length;
}

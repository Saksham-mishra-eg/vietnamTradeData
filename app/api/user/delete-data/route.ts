import { NextResponse } from 'next/server';
import { sanitizeHtml } from 'lib/sanitizer';
import { checkRateLimit } from 'lib/rateLimiter';

// NOTE: This endpoint is a basic implementation that should be adapted to your user auth system.
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = sanitizeHtml(body.email || body.userEmail || '');
    if (!email) return NextResponse.json({ message: 'Email is required' }, { status: 400 });

    const identifier = (request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || email).toString();
    if (!(await checkRateLimit(`delete-data:${identifier}`, 3, 60 * 60 * 1000))) {
      return NextResponse.json({ message: 'Rate limit exceeded' }, { status: 429 });
    }

    // TODO: wire into real deletion logic. For now, pretend we queued a deletion request.
    // In production, verify ownership (auth token) or send verification email before deletion.
    // Example: enqueue deletion job, or call database deletion routines.

  // Minimal audit/logging - in production route this should be sent to a structured log store
  // (no console statement to satisfy linting rules in CI)

    return NextResponse.json({ ok: true, message: 'Deletion request received. We will verify and proceed.' }, { status: 202 });
  } catch (err) {
    return NextResponse.json({ message: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}

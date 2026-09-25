import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminSecretToken = process.env.ADMIN_SECRET_TOKEN;

    if (!adminPassword || !adminSecretToken) {
      logger.error('Admin Login: ADMIN_PASSWORD or ADMIN_SECRET_TOKEN env vars not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (password !== adminPassword) {
      logger.warn('Admin Login: Failed attempt', { ip: req.headers.get('x-forwarded-for') });
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    logger.info('Admin Login: Successful', { ip: req.headers.get('x-forwarded-for') });

    const response = NextResponse.json({ ok: true });
    response.cookies.set('admin_token', adminSecretToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    });
    return response;
  } catch (error: any) {
    logger.error('Admin Login: Unhandled exception', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

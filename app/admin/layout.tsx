import { redirect } from 'next/navigation';
import Link from 'next/link';
import { cookies } from 'next/headers';

// Simple cookie-based auth. Admin sets ADMIN_PASSWORD in env.
// On production, replace with next-auth if multi-user is needed.
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const expected = process.env.ADMIN_SECRET_TOKEN;
  if (!expected) return false;
  return token === expected;
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* Admin top bar */}
      <header className="sticky top-0 z-50 bg-ink text-white px-6 py-3 flex items-center justify-between shadow-[0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold tracking-wide text-white/60 uppercase">September · Admin</span>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/admin" className="text-white/80 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/donations" className="text-white/80 hover:text-white transition-colors">
              Donations
            </Link>
            <Link href="/admin/donors" className="text-white/80 hover:text-white transition-colors">
              Donors
            </Link>
            <Link href="/admin/events" className="text-white/80 hover:text-white transition-colors">
              Webhook Events
            </Link>
          </nav>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </form>
      </header>

      {/* Page content */}
      <main className="flex-1 px-6 py-8 max-w-[1400px] mx-auto w-full">
        {children}
      </main>
    </div>
  );
}

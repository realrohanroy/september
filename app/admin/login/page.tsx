'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState<'idle' | 'pending' | 'error'>('idle');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPhase('pending');
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setPhase('error');
      setError('Incorrect password.');
    }
  }

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-2">September</p>
          <h1 className="text-2xl font-bold text-ink font-heading">Admin access</h1>
          <p className="text-sm text-ink/60 mt-1 font-body">Enter your admin password to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-bold text-ink/60 uppercase tracking-wide">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-rule rounded-full bg-card px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
              placeholder="Admin password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="text-xs text-sindoor font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={phase === 'pending'}
            className="w-full bg-ink text-white font-bold py-3 rounded-full hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {phase === 'pending' ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

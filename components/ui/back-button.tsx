"use client";

import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/' || pathname === '/give') {
    return null; // Don't show on home page or give page (give has its own)
  }

  return (
    <button 
      onClick={() => router.back()} 
      className="mr-4 text-ink hover:text-sindoor transition-colors"
      aria-label="Go back"
    >
      <ArrowLeft size={20} strokeWidth={1.5} />
    </button>
  );
}

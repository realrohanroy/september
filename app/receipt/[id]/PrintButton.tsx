'use client';

import { Download } from 'lucide-react';
import React from 'react';

export function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="flex items-center gap-2 text-ink hover:text-sindoor transition-colors cursor-pointer"
    >
      <span className="text-sm font-bold hidden sm:inline-block">Print PDF</span>
      <Download size={20} strokeWidth={1.5} />
    </button>
  );
}

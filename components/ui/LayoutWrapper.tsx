'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export function LayoutWrapper({ 
  children, 
  header, 
  footer 
}: { 
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Pages that provide their own minimal header/footer (checkout flows, legal layouts)
  const isMinimal = pathname.startsWith('/give') || 
                    pathname.startsWith('/receipt') ||
                    pathname.startsWith('/contact') ||
                    pathname.startsWith('/legal');

  return (
    <>
      {!isMinimal && header}
      {children}
      {!isMinimal && footer}
    </>
  );
}

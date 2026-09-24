import type { Metadata } from "next";
import { Nunito_Sans, Hind } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Since we also need Nunito_Sans for numerals (--font-num), we can just reuse the display font variable 
// or set --font-num in globals.css to var(--font-display). In globals.css it's set to Nunito Sans.

const hind = Hind({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "September | We publish our book.",
  description: "Every rupee that comes in, every rupee that goes out, updated every Sunday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${hind.variable} ruled-bg min-h-screen antialiased flex flex-col`}
        style={{"--font-num": "var(--font-display)"} as React.CSSProperties}
      >
        <div className="relative z-content flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}

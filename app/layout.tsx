import type { Metadata } from "next";
import { Nunito_Sans, Hind } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from '@/components/ui/LayoutWrapper';
import { PremiumHeader } from '@/components/ui/PremiumHeader';
import { PremiumFooter } from '@/components/ui/PremiumFooter';

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
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
        className={`${nunitoSans.variable} ${hind.variable} font-sans antialiased text-ink bg-paper`}
      >
        <LayoutWrapper header={<PremiumHeader />} footer={<PremiumFooter />}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

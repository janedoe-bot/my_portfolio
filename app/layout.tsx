import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jane Doe — Graphic Designer",
  description: "Seoul-based graphic designer specializing in branding, web design, and typography.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${spaceMono.variable} h-full`}>
      <body className="min-h-full" style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

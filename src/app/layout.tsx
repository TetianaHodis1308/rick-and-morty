import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick-and-Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-gray-900 text-white p-4 shadow-md flex">
          <nav className="flex gap-4">
            <Link href="/" className="hover:text-violet-300 transition">
              Home
            </Link>
            <Link
              href="/characters"
              className="hover:text-violet-300 transition"
            >
              Character
            </Link>
            <Link
              href="/locations"
              className="hover:text-violet-300 transition"
            >
              Locations
            </Link>
            <Link href="/episodes" className="hover:text-violet-300 transition">
              Episodes
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kame / カメ",
  description:
    "Steady components, robust shells, and timeless motion for the modern web.",
  openGraph: {
    title: "Kame / カメ",
    description:
      "Steady components, robust shells, and timeless motion for the modern web.",
    url: "https://kame.dev/",
    siteName: "Kame / カメ",
    images: [
      {
        url: "https://kame.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kame / カメ",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}

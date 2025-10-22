import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "antd/dist/reset.css";
import "./globals.css";

import AppProviders from "@/components/providers/AppProviders";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "포 플레이스",
    template: "%s · 포 플레이스",
  },
  description: "사람과 반려동물이 편히 머무는 공간을 고릅니다",
  openGraph: {
    title: "포 플레이스",
    description: "사람과 반려동물이 편히 머무는 공간을 고릅니다",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "포 플레이스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "포 플레이스",
    description: "사람과 반려동물이 편히 머무는 공간을 고릅니다",
    images: [
      {
        url: "/og-image.png",
        alt: "포 플레이스",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
}

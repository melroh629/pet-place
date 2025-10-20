import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "antd/dist/reset.css";
import "./globals.css";

import AppProviders from "@/components/providers/AppProviders";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "펫플레이스",
    template: "%s · 펫플레이스",
  },
  description: "반려동물과 함께 방문하기 좋은 장소를 큐레이션한 목록",
  openGraph: {
    title: "펫플레이스",
    description: "반려동물과 함께 방문하기 좋은 장소를 큐레이션한 목록",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "펫플레이스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "펫플레이스",
    description: "반려동물과 함께 방문하기 좋은 장소를 큐레이션한 목록",
    images: [
      {
        url: "/og-image.png",
        alt: "펫플레이스",
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

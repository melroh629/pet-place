"use client";

import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { useMemo } from "react";

import { baseColors, brandColors } from "@/styles/colors";

const baseTheme: ThemeConfig = {
  token: {
    colorPrimary: brandColors.primary,
    colorInfo: brandColors.primary,
    colorSuccess: brandColors.primary,
    colorLink: brandColors.primary,
    borderRadius: 12,
    fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
  },
  components: {
    Button: {
      borderRadius: 14,
      fontWeight: 600,
      controlHeight: 44,
      controlOutline: brandColors.primaryAlpha[33],
    },
    Select: {
      borderRadius: 14,
      controlHeight: 44,
      controlOutline: brandColors.primaryAlpha[33],
      colorPrimary: brandColors.primary,
    },
    Tooltip: {
      borderRadius: 10,
      colorText: baseColors.white,
    },
  },
};

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const memoizedTheme = useMemo(() => baseTheme, []);

  return (
    <ConfigProvider theme={memoizedTheme} iconPrefixCls="pet">
      {children}
    </ConfigProvider>
  );
}

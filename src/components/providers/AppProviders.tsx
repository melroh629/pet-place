"use client";

import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { useMemo } from "react";

const BRAND_PRIMARY = "#00c27a";
const BRAND_NEUTRAL = "#0f341f";

const baseTheme: ThemeConfig = {
  token: {
    colorPrimary: BRAND_PRIMARY,
    colorInfo: BRAND_PRIMARY,
    colorSuccess: BRAND_PRIMARY,
    colorLink: BRAND_PRIMARY,
    borderRadius: 12,
    fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
  },
  components: {
    Button: {
      borderRadius: 14,
      fontWeight: 600,
      controlHeight: 44,
      controlOutline: `${BRAND_PRIMARY}33`,
    },
    Select: {
      borderRadius: 14,
      controlHeight: 44,
      controlOutline: `${BRAND_PRIMARY}33`,
      colorPrimary: BRAND_PRIMARY,
    },
    Tooltip: {
      borderRadius: 10,
      colorText: "#ffffff",
      colorBgDefault: BRAND_NEUTRAL,
    },
    Tag: {
      borderRadiusSM: 999,
      borderRadius: 999,
      fontWeight: 600,
    },
  },
};

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const memoizedTheme = useMemo(() => baseTheme, []);

  return (
    <ConfigProvider theme={memoizedTheme} wave={{ disabled: true }} iconPrefix="pet">
      {children}
    </ConfigProvider>
  );
}

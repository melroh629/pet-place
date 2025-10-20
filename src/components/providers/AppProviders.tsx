"use client";

import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import { useMemo } from "react";

const BRAND_PRIMARY = "#00c27a";

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

/**
 * Pet Places 서비스 색상 체계
 *
 * 프로젝트 전체에서 사용하는 색상을 중앙에서 관리합니다.
 */

// ============================================
// 브랜드 메인 컬러
// ============================================

export const brandColors = {
  /** 핵심 브랜드 컬러 - 밝은 민트/에메랄드 그린 */
  primary: "#00c27a",
  /** 짙은 그린 - 텍스트/아이콘 */
  primaryDark: "#007a4d",
  /** 연한 민트 배경색 */
  primaryLight: "#e8fff4",
  /** 매우 연한 민트 - 서브 배경 */
  primarySubtle: "#f2f6f4",
  /** Primary 컬러 투명도 변형 */
  primaryAlpha: {
    12: "rgba(0, 194, 122, 0.12)",
    16: "rgba(0, 194, 122, 0.16)",
    26: "rgba(0, 194, 122, 0.26)",
    33: "rgba(0, 194, 122, 0.33)",
  },
} as const;

// ============================================
// 베이스 컬러
// ============================================

export const baseColors = {
  /** 메인 배경색 */
  background: "#f5f6f8",
  /** 보조 배경색 */
  backgroundSecondary: "#f7f8fa",
  /** 카드/모달 배경 */
  white: "#ffffff",
  /** 주요 텍스트 */
  text: {
    primary: "#222",
    primaryDark: "#1a1a1a",
    secondary: "#555555",
    tertiary: "#777777",
    quaternary: "#9e9e9e",
    muted: "#6b7280",
    subtle: "#374151",
  },
  /** 보더/구분선 */
  border: {
    light: "rgba(0, 0, 0, 0.03)",
    normal: "rgba(0, 0, 0, 0.04)",
    medium: "#d5e4db",
    solid: "#e5e5e5",
  },
  /** 오버레이/그림자 */
  overlay: {
    backdrop: "rgba(26, 26, 26, 0.4)",
    light: "rgba(255, 255, 255, 0.74)",
    medium: "rgba(255, 255, 255, 0.88)",
    strong: "rgba(255, 255, 255, 0.94)",
  },
  /** 그림자 */
  shadow: {
    light: "0 8px 24px rgba(0, 0, 0, 0.04)",
    normal: "0 12px 28px rgba(0, 0, 0, 0.08)",
    medium: "0 -18px 40px rgba(0, 0, 0, 0.14)",
    strong: "0 20px 60px rgba(0, 0, 0, 0.2)",
  },
  /** 스크롤바 */
  scrollbar: "rgba(15, 23, 42, 0.14)",
} as const;

// ============================================
// 카테고리별 컬러
// ============================================

export const categoryColors = {
  park: "#DFF0D8",
  cafe: "#FFF5DA",
  restaurant: "#FFE5CC",
  playground: "#E0F7F1",
  hotel: "#E8E4FF",
  etc: "#F5F5F5",
} as const;

// ============================================
// 장소 정보 뱃지 컬러 (상세)
// ============================================

export const placeInfoColors = {
  free: {
    badgeBg: "rgba(0, 194, 122, 0.16)",
    badgeColor: "#0f5132",
    cardBg: "#f2fbf7",
    cardBorder: "rgba(0, 194, 122, 0.26)",
    iconColor: "#00a86b",
  },
  paid: {
    badgeBg: "rgba(255, 193, 7, 0.18)",
    badgeColor: "#8a5300",
    cardBg: "#fff8e6",
    cardBorder: "rgba(255, 193, 7, 0.3)",
    iconColor: "#d97706",
  },
  indoor: {
    badgeBg: "rgba(59, 130, 246, 0.18)",
    badgeColor: "#1d4ed8",
    cardBg: "#eef4ff",
    cardBorder: "rgba(59, 130, 246, 0.26)",
    iconColor: "#2563eb",
  },
  outdoor: {
    badgeBg: "rgba(13, 148, 136, 0.18)",
    badgeColor: "#0f766e",
    cardBg: "#e6f9f7",
    cardBorder: "rgba(13, 148, 136, 0.28)",
    iconColor: "#0d9488",
  },
  parking: {
    badgeBg: "rgba(167, 139, 250, 0.2)",
    badgeColor: "#5b21b6",
    cardBg: "#f4f1ff",
    cardBorder: "rgba(167, 139, 250, 0.28)",
    iconColor: "#7c3aed",
  },
  leashFree: {
    badgeBg: "rgba(244, 63, 94, 0.16)",
    badgeColor: "#9f1239",
    cardBg: "#fff1f4",
    cardBorder: "rgba(244, 63, 94, 0.28)",
    iconColor: "#dc2626",
  },
  general: {
    badgeBg: "#eef2f0",
    badgeColor: "#52625d",
    cardBg: "#f7f9f8",
    cardBorder: "rgba(120, 136, 132, 0.24)",
    iconColor: "#4a5c56",
  },
} as const;

// ============================================
// 상태별 컬러
// ============================================

export const stateColors = {
  error: {
    bg: "rgba(248, 113, 113, 0.12)",
    text: "#b91c1c",
  },
  success: {
    bg: "rgba(0, 194, 122, 0.12)",
    text: "#007a4d",
  },
} as const;

// ============================================
// 아이콘 컬러
// ============================================

export const iconColors = {
  default: "#1f2937",
  white: "#ffffff",
  primary: "#007a4d",
} as const;

// ============================================
// 타입 정의
// ============================================

export type BrandColor = keyof typeof brandColors;
export type CategoryColor = keyof typeof categoryColors;
export type PlaceInfoColorType = keyof typeof placeInfoColors;

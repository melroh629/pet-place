import type { Category } from "./places";

// ==================== 공통 펫티켓 (전체 페이지용) ====================

export type PetiquetteItem = {
  id: string;
  icon: string;
  title: string;
  dos: string[];
  donts: string[];
  message: string;
};

export const COMMON_PETIQUETTE: PetiquetteItem[] = [
  {
    id: "leash",
    icon: "🐕",
    title: "목줄 & 이동",
    dos: [
      "목줄은 항상 짧게 (1m 이내)",
      "오프리쉬 절대 금지 (어떤 경우에도)",
    ],
    donts: [
      "다른 반려견에게 함부로 접근",
      "다른 사람/반려견 테이블에 방문",
    ],
    message: "한 사람의 실수가 모든 반려인의 출입을 막을 수 있어요",
  },
  {
    id: "potty",
    icon: "🚽",
    title: "배변 & 위생",
    dos: [
      "입장 전 배변 마치기",
      "배변봉투 항상 지참 (실내/실외 모두)",
      "마킹하는 강아지는 매너벨트 필수",
    ],
    donts: ["실내 배변/마킹 후 처리 및 고지 미흡"],
    message: "배변 사고는 시설 손상과 다른 손님의 불편을 초래해요",
  },
  {
    id: "bark",
    icon: "🔊",
    title: "짖음 & 소음",
    dos: ["과도한 짖음은 즉시 진정시키기", "진정 안 되면 잠시 밖으로 나가기"],
    donts: [],
    message:
      "낯선 환경에선 강아지도 긴장할 수 있어요. 다른 손님들의 너그러운 양해를 부탁드려요",
  },
  {
    id: "clean",
    icon: "🧼",
    title: "청결 & 매너",
    dos: [
      "패드나 매트 깔아주기 (털 날림 방지)",
      "테이블/의자에 강아지 올리지 않기",
      "사람 음식 주지 않기",
      "퇴장 시 주변 정리 (털, 오물 등)",
    ],
    donts: [],
    message: "다음에 올 반려인을 위해 깨끗하게 유지해요",
  },
];

// ==================== 카테고리별 펫티켓 (상세페이지용) ====================

export type CategoryPetiquette = {
  items: string[];
  message: string;
};

export const CATEGORY_PETIQUETTE: Record<Category, CategoryPetiquette> = {
  cafe: {
    items: [
      "목줄 1m 이내로 짧게",
      "테이블 아래 안정적으로 앉히기",
      "다른 손님 식사 방해하지 않기",
    ],
    message: "작은 배려가 더 많은 애견동반 장소를 만들어요",
  },
  restaurant: {
    items: [
      "목줄 1m 이내로 짧게",
      "테이블 아래 안정적으로 앉히기",
      "과도한 짖음은 즉시 진정",
    ],
    message: "작은 배려가 더 많은 애견동반 장소를 만들어요",
  },
  trail: {
    items: [
      "배변 후 즉시 처리하기",
      "다른 반려견 만날 땐 보호자 허락 먼저",
      "목줄은 항상 착용 (오프리쉬 금지)",
    ],
    message: "모두의 공원을 함께 지켜요",
  },
  hotel: {
    items: [
      "입장 전 배변 마치기",
      "침대/소파에 매트 깔기",
      "가구/벽지 파손 주의하기",
    ],
    message: "파손 발생 시 즉시 고지 및 배상 부탁드려요",
  },
  playground: {
    items: [
      "배변 후 즉시 처리하기",
      "다른 반려견과 거리 유지하기",
      "공격성 있다면 입마개 착용",
    ],
    message: "함께 사용하는 공간을 배려해주세요",
  },
  etc: {
    items: [
      "목줄은 항상 짧게 (1m 이내)",
      "입장 전 배변 마치기",
      "과도한 짖음은 즉시 진정",
    ],
    message: "좋은 장소를 함께 지켜나가요",
  },
};

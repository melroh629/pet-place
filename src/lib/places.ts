import { z } from "zod";

// ==================== ENUM 정의 ====================

export const REGIONS = [
  "seoul",
  "busan",
  "daegu",
  "incheon",
  "gwangju",
  "daejeon",
  "ulsan",
  "sejong",
  "gyeonggi",
  "gangwon",
  "chungbuk",
  "chungnam",
  "jeonbuk",
  "jeonnam",
  "gyeongbuk",
  "gyeongnam",
  "jeju",
] as const;

export type Region = (typeof REGIONS)[number];

export const REGION_LABELS: Record<Region, string> = {
  seoul: "서울",
  busan: "부산",
  daegu: "대구",
  incheon: "인천",
  gwangju: "광주",
  daejeon: "대전",
  ulsan: "울산",
  sejong: "세종",
  gyeonggi: "경기",
  gangwon: "강원",
  chungbuk: "충북",
  chungnam: "충남",
  jeonbuk: "전북",
  jeonnam: "전남",
  gyeongbuk: "경북",
  gyeongnam: "경남",
  jeju: "제주",
};

export const CATEGORIES = [
  "restaurant",
  "cafe",
  "park",
  "hotel",
  "playground",
  "etc",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  restaurant: "식당",
  cafe: "카페",
  park: "공원",
  hotel: "숙소",
  playground: "운동장",
  etc: "기타",
};

export const ADDRESS_TYPES = ["road", "jibun"] as const;
export type AddressType = (typeof ADDRESS_TYPES)[number];

export const ADDRESS_TYPE_LABELS: Record<AddressType, string> = {
  road: "도로명",
  jibun: "지번",
};

export const PARKING_OPTIONS = [
  "available",
  "limited",
  "none",
  "unknown",
] as const;

export type ParkingOption = (typeof PARKING_OPTIONS)[number];

export const PARKING_LABELS: Record<ParkingOption, string> = {
  available: "가능",
  limited: "제한적",
  none: "없음",
  unknown: "모름",
};

export const DOG_ACCESS_OPTIONS = [
  "all_allowed",
  "indoor_only",
  "outdoor_only",
  "partial",
  "unknown",
] as const;

export type DogAccessOption = (typeof DOG_ACCESS_OPTIONS)[number];

export const DOG_ACCESS_LABELS: Record<DogAccessOption, string> = {
  all_allowed: "모두 가능",
  indoor_only: "실내만 가능",
  outdoor_only: "실외만 가능",
  partial: "일부 구역만 가능",
  unknown: "미확인",
};

export const WEIGHT_LIMIT_OPTIONS = [
  "limited",
  "no_limit",
  "unknown",
] as const;

export type WeightLimitOption = (typeof WEIGHT_LIMIT_OPTIONS)[number];

export const WEIGHT_LIMIT_LABELS: Record<WeightLimitOption, string> = {
  limited: "무게 제한 있음",
  no_limit: "무게 제한 없음",
  unknown: "정보 없음",
};

export const DOG_REQUIREMENT_OPTIONS = [
  "none",
  "carrier_required",
  "stroller_required",
  "cage_required",
  "unknown",
] as const;

export type DogRequirement = (typeof DOG_REQUIREMENT_OPTIONS)[number];

export const DOG_REQUIREMENT_LABELS: Record<DogRequirement, string> = {
  none: "목줄만 착용 시 가능",
  carrier_required: "이동가방 필요",
  stroller_required: "유모차 필요",
  cage_required: "케이지 필요",
  unknown: "정보 없음",
};

export const BREED_LIMIT_OPTIONS = [
  "limited",
  "no_limit",
  "except_aggressive",
  "unknown",
] as const;

export type BreedLimit = (typeof BREED_LIMIT_OPTIONS)[number];

export const BREED_LIMIT_LABELS: Record<BreedLimit, string> = {
  limited: "견종 제한 있음",
  no_limit: "견종 제한 없음",
  except_aggressive: "맹견 제외",
  unknown: "정보 없음",
};

// ==================== 타입 정의 ====================

export type Place = {
  id: string | number;
  name: string;
  region: Region;
  category_list: Category;
  address: string;
  address_type?: AddressType | null;
  phone?: string | null;
  parking?: ParkingOption | null;
  dog_access?: DogAccessOption | null;
  dog_requirements?: DogRequirement | null;
  weight_limit?: WeightLimitOption | null;
  breed_limit?: BreedLimit | null;
  naver_url?: string | null;
  insta_url?: string | null;
  verified_at?: string | null;
  source?: string | null;
  memo?: string | null;
};

// ==================== UI 관련 설정 ====================

export const CATEGORY_EMOJI: Record<Category, string> = {
  park: "🌳",
  cafe: "☕",
  restaurant: "🍽️",
  playground: "🌿",
  hotel: "🏠",
  etc: "🐶",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  park: "#DFF0D8",
  cafe: "#FFF5DA",
  restaurant: "#FFE5CC",
  playground: "#E0F7F1",
  hotel: "#E8E4FF",
  etc: "#F5F5F5",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  park: "default_공원.png",
  cafe: "default_카페.png",
  restaurant: "default_식당.png",
  playground: "default_운동장.png",
  hotel: "default_숙소.png",
  etc: "default_etc.png",
};

// ==================== Zod 스키마 ====================

export const PlaceSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(1),
  region: z.enum(REGIONS),
  category_list: z.enum(CATEGORIES),
  address: z.string().min(1),
  address_type: z.enum(ADDRESS_TYPES).nullish(),
  phone: z.string().trim().nullish(),
  parking: z.enum(PARKING_OPTIONS).nullish(),
  dog_access: z.enum(DOG_ACCESS_OPTIONS).nullish(),
  dog_requirements: z.enum(DOG_REQUIREMENT_OPTIONS).nullish(),
  weight_limit: z.enum(WEIGHT_LIMIT_OPTIONS).nullish(),
  breed_limit: z.enum(BREED_LIMIT_OPTIONS).nullish(),
  naver_url: z.string().url().nullish(),
  insta_url: z.string().url().nullish(),
  verified_at: z
    .string()
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Invalid date format",
    })
    .nullish(),
  source: z.string().nullish(),
  memo: z.string().trim().nullish(),
});

// ==================== 유틸리티 함수 ====================

export function sortByVerifiedAt(list: Place[]): Place[] {
  return [...list].sort((a, b) => {
    const aTime = a.verified_at ? Date.parse(a.verified_at) : 0;
    const bTime = b.verified_at ? Date.parse(b.verified_at) : 0;
    return bTime - aTime;
  });
}

// 한글 라벨을 영어 enum 값으로 변환하는 헬퍼
export function getCategoryKey(label: string): Category | null {
  const entry = Object.entries(CATEGORY_LABELS).find(
    ([, value]) => value === label
  );
  return entry ? (entry[0] as Category) : null;
}

export function getRegionKey(label: string): Region | null {
  const entry = Object.entries(REGION_LABELS).find(
    ([, value]) => value === label
  );
  return entry ? (entry[0] as Region) : null;
}

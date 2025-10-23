import { z } from "zod";

// 타입 정의는 @/types에서 import
export * from "@/types/place";
import type {
  Place,
  Region,
  Category,
  AddressType,
  ParkingOption,
  DogAccessOption,
  WeightLimitOption,
  DogRequirement,
  BreedLimit,
} from "@/types/place";
import {
  REGIONS,
  CATEGORIES,
  ADDRESS_TYPES,
  PARKING_OPTIONS,
  DOG_ACCESS_OPTIONS,
  WEIGHT_LIMIT_OPTIONS,
  DOG_REQUIREMENT_OPTIONS,
  BREED_LIMIT_OPTIONS,
} from "@/types/place";

// ==================== 라벨 정의 ====================

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

export const CATEGORY_LABELS: Record<Category, string> = {
  restaurant: "식당",
  cafe: "카페",
  park: "공원",
  hotel: "숙소",
  playground: "운동장",
  etc: "기타",
};

export const ADDRESS_TYPE_LABELS: Record<AddressType, string> = {
  road: "도로명",
  jibun: "지번",
};

export const PARKING_LABELS: Record<ParkingOption, string> = {
  available: "가능",
  limited: "제한적",
  none: "없음",
  unknown: "모름",
};

export const DOG_ACCESS_LABELS: Record<DogAccessOption, string> = {
  all_allowed: "모두 가능",
  indoor_only: "실내만 가능",
  outdoor_only: "실외만 가능",
  partial: "일부 구역만 가능",
  unknown: "미확인",
};

export const WEIGHT_LIMIT_LABELS: Record<WeightLimitOption, string> = {
  limited: "무게 제한 있음",
  no_limit: "무게 제한 없음",
  unknown: "정보 없음",
};

export const DOG_REQUIREMENT_LABELS: Record<DogRequirement, string> = {
  none: "목줄만 착용 시 가능",
  carrier_required: "이동가방 필요",
  stroller_required: "유모차 필요",
  cage_required: "케이지 필요",
  unknown: "정보 없음",
};

export const BREED_LIMIT_LABELS: Record<BreedLimit, string> = {
  limited: "견종 제한 있음",
  no_limit: "견종 제한 없음",
  except_aggressive: "맹견 제외",
  unknown: "정보 없음",
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

// 카테고리 색상은 @/styles/colors에서 import하여 사용
// export된 categoryColors를 재사용
import { categoryColors } from "@/styles/colors";

export const CATEGORY_COLORS: Record<Category, string> = categoryColors;

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

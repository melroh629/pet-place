/**
 * 장소 관련 타입 정의
 */

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

export const CATEGORIES = [
  "restaurant",
  "cafe",
  "trail",
  "hotel",
  "playground",
  "etc",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const ADDRESS_TYPES = ["road", "jibun"] as const;
export type AddressType = (typeof ADDRESS_TYPES)[number];

export const PARKING_OPTIONS = [
  "available",
  "limited",
  "none",
  "unknown",
] as const;

export type ParkingOption = (typeof PARKING_OPTIONS)[number];

export const DOG_ACCESS_OPTIONS = [
  "all_allowed",
  "indoor_only",
  "outdoor_only",
  "partial",
  "unknown",
] as const;

export type DogAccessOption = (typeof DOG_ACCESS_OPTIONS)[number];

export const WEIGHT_LIMIT_OPTIONS = [
  "limited",
  "no_limit",
  "unknown",
] as const;

export type WeightLimitOption = (typeof WEIGHT_LIMIT_OPTIONS)[number];

export const DOG_REQUIREMENT_OPTIONS = [
  "none",
  "carrier_required",
  "stroller_required",
  "cage_required",
  "unknown",
] as const;

export type DogRequirement = (typeof DOG_REQUIREMENT_OPTIONS)[number];

export const BREED_LIMIT_OPTIONS = [
  "limited",
  "no_limit",
  "except_aggressive",
  "unknown",
] as const;

export type BreedLimit = (typeof BREED_LIMIT_OPTIONS)[number];

// ==================== Place 타입 ====================

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

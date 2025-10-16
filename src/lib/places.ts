import Papa from "papaparse";
import { z } from "zod";

export const REGIONS = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
] as const;

export type Region = (typeof REGIONS)[number];

export const CATEGORIES = ["공원", "카페", "식당", "식물원", "숙소", "기타"] as const;

export type Category = (typeof CATEGORIES)[number];

export type PlaceSource = "직접 방문" | "전화 확인" | "추천" | "기타";

export type Place = {
  id: string;
  name: string;
  region: Region;
  category: Category;
  address: string;
  phone?: string;
  naverUrl?: string;
  instagramUrl?: string;
  verifiedAt?: string;
  source: PlaceSource;
  memo?: string;
  photoUrl?: string;
  approved: boolean;
};

export const CATEGORY_EMOJI: Record<Category, string> = {
  공원: "🌳",
  카페: "☕",
  식당: "🍽️",
  식물원: "🌿",
  숙소: "🏠",
  기타: "🐶",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  공원: "#DFF0D8",
  카페: "#FFF5DA",
  식당: "#FFE5CC",
  식물원: "#E0F7F1",
  숙소: "#E8E4FF",
  기타: "#F5F5F5",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  공원: "default_공원.png",
  카페: "default_카페.png",
  식당: "default_식당.png",
  식물원: "default_식물원.png",
  숙소: "default_숙소.png",
  기타: "default_etc.png",
};

const CATEGORY_ALIASES: Record<string, Category> = {
  공원: "공원",
  park: "공원",
  parks: "공원",
  카페: "카페",
  cafe: "카페",
  cafes: "카페",
  coffee: "카페",
  식당: "식당",
  restaurant: "식당",
  restaurants: "식당",
  dining: "식당",
  식물원: "식물원",
  botanical: "식물원",
  garden: "식물원",
  gardens: "식물원",
  숙소: "숙소",
  stay: "숙소",
  hotel: "숙소",
  hotels: "숙소",
  기타: "기타",
  etc: "기타",
  others: "기타",
  기타공유: "기타",
  playground: "기타",
  activity: "기타",
};

const REGION_SET = new Set<Region>(REGIONS);
const CATEGORY_SET = new Set<Category>(CATEGORIES);

const PlaceSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  region: z.enum(REGIONS),
  category: z.enum(CATEGORIES),
  address: z.string().min(1),
  phone: z.string().trim().optional(),
  naverUrl: z.string().url().optional(),
  instagramUrl: z.string().url().optional(),
  verifiedAt: z
    .string()
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Invalid date format",
    })
    .optional(),
  source: z.enum(["직접 방문", "전화 확인", "추천", "기타"] as const),
  memo: z.string().trim().optional(),
  photoUrl: z.string().url().optional(),
  approved: z.boolean(),
});

type RawRow = Record<string, string | null>;

function pickString(row: RawRow, key: string): string | undefined {
  const value = row[key];
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function normalizeRegion(value: string | undefined): Region | null {
  if (!value) {
    return null;
  }
  if (REGION_SET.has(value as Region)) {
    return value as Region;
  }
  return null;
}

function normalizeCategory(value: string | undefined): Category | null {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  if (CATEGORY_SET.has(trimmed as Category)) {
    return trimmed as Category;
  }
  const alias = CATEGORY_ALIASES[trimmed] ?? CATEGORY_ALIASES[trimmed.toLowerCase()];
  if (alias) {
    return alias;
  }
  return null;
}

function normalizeSource(value: string | undefined): PlaceSource {
  if (!value) {
    return "기타";
  }
  const compact = value.replace(/\s+/g, "");
  switch (compact) {
    case "직접방문":
    case "직접방문확인":
    case "직접방문및확인":
      return "직접 방문";
    case "전화확인":
      return "전화 확인";
    case "추천":
      return "추천";
    default:
      return "기타";
  }
}

function toBoolean(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "y" || normalized === "yes";
}

function toOptionalUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  if (!/^https?:\/\//.test(trimmed)) {
    return undefined;
  }
  return trimmed;
}

function toOptionalDate(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  return Number.isNaN(Date.parse(trimmed)) ? undefined : trimmed;
}

function mapRowToPlace(row: RawRow): Place | null {
  const id = pickString(row, "id");
  const name = pickString(row, "name");
  const region = normalizeRegion(pickString(row, "region"));
  const category = normalizeCategory(pickString(row, "category"));
  const address = pickString(row, "address");

  if (!id || !name || !region || !category || !address) {
    return null;
  }

  const hasApprovedColumn = Object.prototype.hasOwnProperty.call(row, "approved");
  const approvedCandidate = hasApprovedColumn ? pickString(row, "approved") : undefined;

  const placeCandidate: Place = {
    id,
    name,
    region,
    category,
    address,
    phone: pickString(row, "phone"),
    naverUrl: toOptionalUrl(pickString(row, "naver_url")),
    instagramUrl: toOptionalUrl(pickString(row, "insta")),
    verifiedAt: toOptionalDate(pickString(row, "verified_at")),
    source: normalizeSource(pickString(row, "source")),
    memo: pickString(row, "memo"),
    photoUrl: toOptionalUrl(pickString(row, "photo_url")),
    approved: hasApprovedColumn ? toBoolean(approvedCandidate) : true,
  };

  const parsed = PlaceSchema.safeParse(placeCandidate);
  if (!parsed.success) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Invalid place row skipped", parsed.error.flatten());
    }
    return null;
  }

  return parsed.data;
}

export function parsePlacesCsv(csv: string): Place[] {
  const result = Papa.parse<RawRow>(csv, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header: string) => header.trim().toLowerCase(),
    transform: (value: string) => value.trim(),
  });

  const data = Array.isArray(result.data) ? result.data : [];

  return data
    .map((row) => mapRowToPlace(row))
    .filter((item): item is Place => Boolean(item));
}

export function sortByVerifiedAt(list: Place[]): Place[] {
  return [...list].sort((a, b) => {
    const aTime = a.verifiedAt ? Date.parse(a.verifiedAt) : 0;
    const bTime = b.verifiedAt ? Date.parse(b.verifiedAt) : 0;
    return bTime - aTime;
  });
}

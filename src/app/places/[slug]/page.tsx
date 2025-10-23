import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PlaceDetailView from "@/components/places/PlaceDetailView";
import { supabase } from "@/lib/supabase";
import { PlaceSchema, CATEGORY_LABELS, REGION_LABELS, type Place } from "@/lib/places";

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

// 장소 데이터 가져오기
async function getPlace(slug: string): Promise<Place | null> {
  try {
    const { data, error } = await supabase
      .from("places_with_category")
      .select("*")
      .eq("id", slug)
      .single();

    if (error || !data) {
      console.error("Failed to fetch place:", error);
      return null;
    }

    const result = PlaceSchema.safeParse(data);
    if (!result.success) {
      console.error("Invalid place data:", result.error);
      return null;
    }

    return result.data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

// 모든 장소 ID 가져오기 (Static Generation용)
async function getAllPlaceIds(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("places_with_category")
      .select("id");

    if (error || !data) {
      console.error("Failed to fetch place IDs:", error);
      return [];
    }

    return data.map((item) => String(item.id));
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
}

// 메타데이터 생성
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const resolvedParams = await params;
  const place = await getPlace(resolvedParams.slug);

  if (!place) {
    return {
      title: "장소를 찾을 수 없습니다",
    };
  }

  const title = `${place.name} - ${REGION_LABELS[place.region]} ${CATEGORY_LABELS[place.category_list]}`;
  const description = place.memo?.trim() || `${REGION_LABELS[place.region]}의 반려동물 동반 가능 ${CATEGORY_LABELS[place.category_list]} ${place.name}입니다.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: place.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          alt: place.name,
        },
      ],
    },
  };
}

// 정적 경로 생성 (ISR)
export async function generateStaticParams() {
  const ids = await getAllPlaceIds();
  return ids.map((id) => ({
    slug: id,
  }));
}

// 페이지 컴포넌트
export default async function PlaceDetailPage({ params }: PageParams) {
  const resolvedParams = await params;
  const place = await getPlace(resolvedParams.slug);

  if (!place) {
    notFound();
  }

  return <PlaceDetailView place={place} />;
}

// ISR: 60초마다 재검증
export const revalidate = 60;

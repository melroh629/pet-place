import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pawplaces.kr";

async function getAllPlaceIds(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("places_with_category")
      .select("id");

    if (error || !data) {
      console.error("Failed to fetch place IDs for sitemap:", error);
      return [];
    }

    return data.map((item) => String(item.id));
  } catch (err) {
    console.error("Unexpected error in sitemap:", err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const placeIds = await getAllPlaceIds();

  // 홈페이지
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // 모든 장소 상세페이지
  const placeRoutes: MetadataRoute.Sitemap = placeIds.map((id) => ({
    url: `${siteUrl}/places/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...placeRoutes];
}

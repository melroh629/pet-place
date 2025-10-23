"use client";

import { useMemo, useState } from "react";
import styled from "styled-components";

import FilterBar from "@/components/filters/FilterBar";
import SiteHero from "@/components/hero/SiteHero";
import PageHeader from "@/components/layout/PageHeader";
import PlaceList from "@/components/places/PlaceList";
import { usePlaces } from "@/hooks/usePlaces";
import {
  CATEGORIES,
  REGIONS,
  type Category,
  type Region,
} from "@/lib/places";

const REGION_OPTIONS: Array<Region | "전체"> = ["전체", ...REGIONS];
const CATEGORY_OPTIONS: Array<Category | "전체"> = ["전체", ...CATEGORIES];

export default function Page() {
  const { places: allPlaces, loading, error } = usePlaces();
  const [region, setRegion] = useState<Region | "전체">("전체");
  const [category, setCategory] = useState<Category | "전체">("전체");

  const filtered = useMemo(() => {
    return allPlaces.filter((place) => {
      const matchesRegion = region === "전체" || place.region === region;
      const matchesCategory =
        category === "전체" || place.category_list === category;
      return matchesRegion && matchesCategory;
    });
  }, [allPlaces, region, category]);

  return (
    <PageBackground>
      <PageHeader />
      <PageWrap>
        <SiteHero />
        <FilterBar
          region={region}
          category={category}
          regions={REGION_OPTIONS}
          categories={CATEGORY_OPTIONS}
          onRegionChange={setRegion}
          onCategoryChange={setCategory}
        />
        <PlaceList
          places={filtered}
          loading={loading}
          error={error}
        />
      </PageWrap>
    </PageBackground>
  );
}

const PageBackground = styled.div`
  min-height: 100vh;
  background: #f7f8fa;
`;

const PageWrap = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding: 36px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

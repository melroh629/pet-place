import styled from "styled-components";

import { Select } from "antd";

import type { Category, Region } from "@/lib/places";

const REGION_LABEL_ID = "filter-region-label";
const CATEGORY_LABEL_ID = "filter-category-label";

type FilterBarProps = {
  region: Region | "전체";
  category: Category | "전체";
  regions: Array<Region | "전체">;
  categories: Array<Category | "전체">;
  onRegionChange: (value: Region | "전체") => void;
  onCategoryChange: (value: Category | "전체") => void;
};

export default function FilterBar({
  region,
  category,
  regions,
  categories,
  onRegionChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <FilterWrap>
      <Field>
        <Label id={REGION_LABEL_ID}>지역</Label>
        <Select
          aria-labelledby={REGION_LABEL_ID}
          value={region}
          style={{ width: "100%" }}
          options={regions.map((option) => ({ value: option, label: option }))}
          onChange={(value) => onRegionChange(value as Region | "전체")}
          popupMatchSelectWidth={false}
        />
      </Field>
      <Field>
        <Label id={CATEGORY_LABEL_ID}>카테고리</Label>
        <Select
          aria-labelledby={CATEGORY_LABEL_ID}
          value={category}
          style={{ width: "100%" }}
          options={categories.map((option) => ({ value: option, label: option }))}
          onChange={(value) => onCategoryChange(value as Category | "전체")}
          popupMatchSelectWidth={false}
        />
      </Field>
    </FilterWrap>
  );
}

const FilterWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: clamp(16px, 3vw, 20px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #e5e5e5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 160px;
  font-size: 13px;
  font-weight: 600;
  color: #555555;
`;

const Label = styled.label`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9e9e9e;
`;

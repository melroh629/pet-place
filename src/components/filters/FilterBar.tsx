import type { ChangeEvent } from "react";
import styled from "styled-components";

import type { Category, Region } from "@/lib/places";

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
  function handleRegion(event: ChangeEvent<HTMLSelectElement>) {
    onRegionChange(event.target.value as Region | "전체");
  }

  function handleCategory(event: ChangeEvent<HTMLSelectElement>) {
    onCategoryChange(event.target.value as Category | "전체");
  }

  return (
    <FilterWrap>
      <Field>
        <Label htmlFor="filter-region">지역</Label>
        <Select id="filter-region" value={region} onChange={handleRegion}>
          {regions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>
      <Field>
        <Label htmlFor="filter-category">카테고리</Label>
        <Select id="filter-category" value={category} onChange={handleCategory}>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
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

const Select = styled.select`
  border-radius: 14px;
  border: 1px solid #d7e2db;
  padding: 11px 14px;
  font-size: 15px;
  background: #ffffff;
  color: #1a1a1a;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #00c27a;
    box-shadow: 0 0 0 3px rgba(0, 194, 122, 0.18);
    outline: none;
  }
`;

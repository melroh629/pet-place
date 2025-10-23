import styled from "styled-components";

import type { Place } from "@/lib/places";
import { baseColors, brandColors, stateColors } from "@/styles/colors";

import PlaceCard from "./PlaceCard";

type PlaceListProps = {
  places: Place[];
  loading: boolean;
  error: string | null;
  onSelect: (place: Place) => void;
};

export default function PlaceList({ places, loading, error, onSelect }: PlaceListProps) {
  return (
    <div>
      <Summary>{loading ? "장소 정보를 불러오는 중입니다…" : `총 ${places.length} 곳의 기록이 있습니다.`}</Summary>
      {error && <StateMessage $variant="error">{error}</StateMessage>}
      <Grid aria-busy={loading}>
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} onSelect={onSelect} />
        ))}
        {!loading && places.length === 0 && !error && (
          <EmptyState>
            <EmptyTitle>조건에 맞는 장소가 없어요</EmptyTitle>
            <EmptyText>필터를 조정하거나 다른 지역을 확인해 보세요.</EmptyText>
          </EmptyState>
        )}
        {loading && <LoadingState>잠시만 기다려 주세요…</LoadingState>}
      </Grid>
    </div>
  );
}

const Summary = styled.span`
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${baseColors.text.secondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 18px;
`;

const StateMessage = styled.div<{ $variant: "error" | "info" }>`
  border-radius: 14px;
  padding: 16px 18px;
  font-size: 14px;
  margin-bottom: 16px;
  ${(props) =>
    props.$variant === "error"
      ? `background: ${stateColors.error.bg}; color: ${stateColors.error.text};`
      : `background: ${stateColors.success.bg}; color: ${stateColors.success.text};`}
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  padding: 56px 0;
  text-align: center;
  background: ${baseColors.overlay.medium};
  border: 1px dashed ${baseColors.border.medium};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const EmptyTitle = styled.h3`
  margin: 0;
  font-size: 17px;
  color: ${baseColors.text.primaryDark};
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${baseColors.text.tertiary};
`;

const LoadingState = styled(EmptyState)`
  font-size: 15px;
  color: ${brandColors.primaryDark};
`;

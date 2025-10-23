import styled from "styled-components";

import {
  CATEGORY_COLORS,
  CATEGORY_EMOJI,
  CATEGORY_LABELS,
  REGION_LABELS,
  type Place,
} from "@/lib/places";
import { baseColors, brandColors } from "@/styles/colors";

type PlaceCardProps = {
  place: Place;
  onSelect: (place: Place) => void;
};

export default function PlaceCard({ place, onSelect }: PlaceCardProps) {
  const thumbColor = CATEGORY_COLORS[place.category_list];

  return (
    <Card onClick={() => onSelect(place)}>
      <CardThumb $bgColor={thumbColor}>
        <ThumbIcon aria-hidden="true">
          {CATEGORY_EMOJI[place.category_list]}
        </ThumbIcon>
      </CardThumb>
      <CardBody>
        <BadgeRow>
          <Badge>{REGION_LABELS[place.region]}</Badge>
          <Badge>{CATEGORY_LABELS[place.category_list]}</Badge>
        </BadgeRow>
        <CardTitle>{place.name}</CardTitle>
        <CardAddress>{place.address}</CardAddress>
      </CardBody>
    </Card>
  );
}

const Card = styled.article`
  display: flex;
  gap: 18px;
  align-items: stretch;
  border-radius: 22px;
  background: ${baseColors.white};
  border: 1px solid ${baseColors.border.light};
  padding: 18px;
  box-shadow: ${baseColors.shadow.normal};
  cursor: pointer;
  transition: transform 0.16s ease, box-shadow 0.16s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CardThumb = styled.div<{ $bgColor: string }>`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  flex-shrink: 0;
  background: ${(props) => props.$bgColor};
  border: 1px solid ${baseColors.border.normal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbIcon = styled.span`
  font-size: 40px;
`;

const CardBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${brandColors.primaryLight};
  color: ${brandColors.primaryDark};
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${baseColors.text.primaryDark};
  line-height: 1.4;
`;

const CardAddress = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${baseColors.text.tertiary};
  line-height: 1.45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

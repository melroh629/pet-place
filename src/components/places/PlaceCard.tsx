import styled from "styled-components";

import { CATEGORY_COLORS, CATEGORY_EMOJI, type Place } from "@/lib/places";

type PlaceCardProps = {
  place: Place;
  onSelect: (place: Place) => void;
};

export default function PlaceCard({ place, onSelect }: PlaceCardProps) {
  const thumbColor = CATEGORY_COLORS[place.category];

  return (
    <Card onClick={() => onSelect(place)}>
      <CardThumb $bgColor={thumbColor}>
        <ThumbIcon aria-hidden="true">{CATEGORY_EMOJI[place.category]}</ThumbIcon>
      </CardThumb>
      <CardBody>
        <BadgeRow>
          <Badge>{place.region}</Badge>
          <Badge>{place.category}</Badge>
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
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.16s ease, box-shadow 0.16s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(0, 194, 122, 0.16);
  }
`;

const CardThumb = styled.div<{ $bgColor: string }>`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  flex-shrink: 0;
  background: ${(props) => props.$bgColor};
  border: 1px solid rgba(0, 0, 0, 0.04);
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
  gap: 10px;
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
  background: #e8fff4;
  color: #007a4d;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
`;

const CardAddress = styled.p`
  margin: 0;
  font-size: 13px;
  color: #777777;
  line-height: 1.45;
`;

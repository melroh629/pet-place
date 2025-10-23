import { memo, useCallback } from "react";
import styled from "styled-components";

import {
  CATEGORY_COLORS,
  CATEGORY_EMOJI,
  CATEGORY_LABELS,
  REGION_LABELS,
  type Place,
} from "@/lib/places";
import { brandColors } from "@/styles/colors";
import Card, { CardBody, CardText, CardThumb, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type PlaceCardProps = {
  place: Place;
  onSelect: (place: Place) => void;
};

function PlaceCard({ place, onSelect }: PlaceCardProps) {
  const handleClick = useCallback(() => {
    onSelect(place);
  }, [place, onSelect]);
  const thumbColor = CATEGORY_COLORS[place.category_list];

  return (
    <Card onClick={handleClick}>
      <CardThumb $bgColor={thumbColor}>
        <ThumbIcon aria-hidden="true">
          {CATEGORY_EMOJI[place.category_list]}
        </ThumbIcon>
      </CardThumb>
      <CardBody>
        <BadgeRow>
          <StyledBadge
            variant="primary"
            style={
              {
                "--badge-bg-primary": brandColors.primaryLight,
                "--badge-color-primary": brandColors.primaryDark,
              } as React.CSSProperties
            }
          >
            {REGION_LABELS[place.region]}
          </StyledBadge>
          <StyledBadge
            variant="primary"
            style={
              {
                "--badge-bg-primary": brandColors.primaryLight,
                "--badge-color-primary": brandColors.primaryDark,
              } as React.CSSProperties
            }
          >
            {CATEGORY_LABELS[place.category_list]}
          </StyledBadge>
        </BadgeRow>
        <CardTitle>{place.name}</CardTitle>
        <CardText as="p">{place.address}</CardText>
      </CardBody>
    </Card>
  );
}

const ThumbIcon = styled.span`
  font-size: 40px;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledBadge = styled(Badge)``;

export default memo(PlaceCard);

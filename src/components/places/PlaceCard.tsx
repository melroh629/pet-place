import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  CATEGORY_COLORS,
  CATEGORY_EMOJI,
  CATEGORY_LABELS,
  REGION_LABELS,
  type Place,
} from "@/lib/places";
import { brandColors } from "@/styles/colors";
import Card, {
  CardBody,
  CardText,
  CardThumb,
  CardTitle,
} from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type PlaceCardProps = {
  place: Place;
};

function PlaceCard({ place }: PlaceCardProps) {
  const thumbColor = CATEGORY_COLORS[place.category_list];

  return (
    <StyledLink href={`/places/${place.id}`}>
      <Card>
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
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

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

"use client";

import Link from "next/link";
import styled from "styled-components";

import { CATEGORY_PETIQUETTE } from "@/lib/petiquette";
import type { Category } from "@/lib/places";
import { baseColors, brandColors, placeInfoColors } from "@/styles/colors";

type PetiquetteNoticeProps = {
  category: Category;
};

export default function PetiquetteNotice({
  category,
}: PetiquetteNoticeProps) {
  const petiquette = CATEGORY_PETIQUETTE[category];

  return (
    <Container>
      <Header>
        <WarningIcon>⚠️</WarningIcon>
        <Title>방문 전 필독사항</Title>
      </Header>

      <ItemList>
        {petiquette.items.map((item, index) => (
          <Item key={index}>
            <CheckIcon>✅</CheckIcon>
            <ItemText>{item}</ItemText>
          </Item>
        ))}
      </ItemList>

      <Message>{petiquette.message}</Message>

      <ViewAllLink href="/petiquette">펫티켓 전체 보기 →</ViewAllLink>
    </Container>
  );
}

const Container = styled.div`
  background: ${placeInfoColors.paid.cardBg};
  border: 2px solid ${placeInfoColors.paid.cardBorder};
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WarningIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  color: ${placeInfoColors.paid.iconColor};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${baseColors.text.primary};
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const CheckIcon = styled.span`
  font-size: 16px;
  line-height: 1.5;
  flex-shrink: 0;
  color: ${placeInfoColors.free.iconColor};
`;

const ItemText = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: ${baseColors.text.secondary};
`;

const Message = styled.p`
  margin: 4px 0 0;
  padding-top: 8px;
  border-top: 1px solid ${placeInfoColors.paid.cardBorder};
  font-size: 13px;
  font-style: italic;
  line-height: 1.6;
  color: ${baseColors.text.muted};
`;

const ViewAllLink = styled(Link)`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${brandColors.primaryDark};
  text-decoration: none;
  align-self: flex-start;
  transition: color 0.2s ease;

  &:hover {
    color: ${brandColors.primary};
    text-decoration: underline;
  }
`;

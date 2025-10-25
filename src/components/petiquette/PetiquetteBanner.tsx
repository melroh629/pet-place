"use client";

import Link from "next/link";
import styled from "styled-components";
import { baseColors, brandColors } from "@/styles/colors";

export default function PetiquetteBanner() {
  return (
    <BannerLink href="/petiquette">
      <Icon>🐾</Icon>
      <Content>
        <Title>펫티켓을 지켜주세요</Title>
        <Description>
          반려동물과 함께하는 공간에서 꼭 지켜야 할 에티켓을 확인하세요
        </Description>
      </Content>
      <Arrow>→</Arrow>
    </BannerLink>
  );
}

const BannerLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: ${brandColors.primaryLight};
  border: 1px solid ${brandColors.primary}20;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${brandColors.primary}15;
    border-color: ${brandColors.primary}40;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Icon = styled.div`
  font-size: 24px;
  line-height: 1;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${brandColors.primaryDark};
`;

const Description = styled.div`
  font-size: 14px;
  color: ${baseColors.text.secondary};
  line-height: 1.4;
`;

const Arrow = styled.div`
  font-size: 20px;
  color: ${brandColors.primary};
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${BannerLink}:hover & {
    transform: translateX(4px);
  }
`;

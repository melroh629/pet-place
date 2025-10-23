import styled from "styled-components";

import { baseColors, brandColors } from "@/styles/colors";

export default function SiteHero() {
  return (
    <HeroSection>
      <Badge>Paw Place</Badge>
      <Title>포플레이스</Title>
      <Subtitle>
        반려동물과 함께했던 좋은 장소들을 기록하고 소개합니다.
        <br />
        지역과 카테고리를 선택해 살펴보세요.
      </Subtitle>
    </HeroSection>
  );
}

const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Badge = styled.span`
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${brandColors.primaryLight};
  color: ${brandColors.primaryDark};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${baseColors.text.primaryDark};
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${baseColors.text.secondary};
  max-width: 620px;
`;

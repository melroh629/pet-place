import styled from "styled-components";

export default function SiteHero() {
  return (
    <HeroSection>
      <Badge>반려동물 동반</Badge>
      <Title>펫플레이스</Title>
      <Subtitle>
        반려동물과 함께했던 좋은 장소들을 기록하고 소개합니다.
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
  background: #e8fff4;
  color: #007a4d;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1a1a1a;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: #555555;
  max-width: 620px;
`;

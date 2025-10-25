"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import PageHeader from "@/components/layout/PageHeader";
import HeaderButton from "@/components/layout/HeaderButton";
import { baseColors, brandColors, iconColors } from "@/styles/colors";

export default function PetEtiquettePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <PageHeader
        leftActions={
          <HeaderButton onClick={handleBack} aria-label="뒤로가기">
            <ArrowLeftIcon
              size={20}
              stroke={iconColors.default}
              strokeWidth={1.8}
            />
          </HeaderButton>
        }
        rightActions={
          <HeaderButton onClick={handleHome} aria-label="홈으로">
            <HomeIcon size={20} stroke={iconColors.default} strokeWidth={1.8} />
          </HeaderButton>
        }
      />

      <Content>
        <Header>
          <Badge>Pet Etiquette</Badge>
          <Title>펫티켓</Title>
          <Subtitle>
            반려동물과 함께하는 공간에서 지켜야 할 에티켓을 안내합니다.
          </Subtitle>
        </Header>

        <Section>
          <SectionTitle>🐕 기본 에티켓</SectionTitle>
          <EtiquetteList>
            <EtiquetteItem>
              <ItemTitle>목줄 착용은 필수</ItemTitle>
              <ItemDescription>
                실내외를 불문하고 반려동물은 항상 목줄을 착용해야 합니다.
                다른 사람과 반려동물의 안전을 위해 꼭 지켜주세요.
              </ItemDescription>
            </EtiquetteItem>

            <EtiquetteItem>
              <ItemTitle>배변 처리</ItemTitle>
              <ItemDescription>
                반려동물의 배변은 보호자가 즉시 처리해야 합니다. 배변봉투를
                항상 준비하고, 공공장소를 깨끗하게 유지해주세요.
              </ItemDescription>
            </EtiquetteItem>

            <EtiquetteItem>
              <ItemTitle>짖음 관리</ItemTitle>
              <ItemDescription>
                과도한 짖음은 다른 손님들에게 불편을 줄 수 있습니다. 반려동물이
                과도하게 짖을 경우 진정시켜주세요.
              </ItemDescription>
            </EtiquetteItem>

            <EtiquetteItem>
              <ItemTitle>시설 보호</ItemTitle>
              <ItemDescription>
                가구나 시설물을 긁거나 손상시키지 않도록 주의해주세요. 필요시
                방석이나 매트를 사용하면 좋습니다.
              </ItemDescription>
            </EtiquetteItem>

            <EtiquetteItem>
              <ItemTitle>위생 관리</ItemTitle>
              <ItemDescription>
                반려동물의 청결을 유지하고, 털이 많이 빠지는 시기에는 옷을
                입히는 것도 좋은 방법입니다.
              </ItemDescription>
            </EtiquetteItem>
          </EtiquetteList>
        </Section>

        <Section>
          <SectionTitle>📋 장소 이용 전 체크리스트</SectionTitle>
          <CheckList>
            <CheckItem>반려동물 동반 가능 여부 사전 확인</CheckItem>
            <CheckItem>해당 장소의 반려동물 규정 확인</CheckItem>
            <CheckItem>목줄, 배변봉투, 물티슈 등 필수품 준비</CheckItem>
            <CheckItem>반려동물의 건강 상태 확인</CheckItem>
            <CheckItem>예방접종 증명서 (필요시)</CheckItem>
          </CheckList>
        </Section>

        <InfoBox>
          <InfoTitle>함께 만들어가는 펫프렌들리 문화</InfoTitle>
          <InfoText>
            우리 모두가 펫티켓을 잘 지킬 때, 반려동물과 함께할 수 있는 공간이
            더 많아질 수 있습니다. 작은 배려가 큰 변화를 만듭니다.
          </InfoText>
        </InfoBox>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: ${baseColors.white};
  width: 100%;

  @media (min-width: 768px) {
    background: #f7f8fa;
  }
`;

const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 28px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 36px 24px 80px;
    gap: 48px;
  }
`;

const Header = styled.header`
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
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: ${baseColors.text.primaryDark};
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${baseColors.text.secondary};
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${baseColors.text.primary};
`;

const EtiquetteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EtiquetteItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${baseColors.text.primary};
`;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: ${baseColors.text.secondary};
`;

const CheckList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CheckItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  color: ${baseColors.text.secondary};

  &::marker {
    color: ${brandColors.primary};
  }
`;

const InfoBox = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: ${brandColors.primaryLight};
  border: 1px solid ${brandColors.primary}20;
`;

const InfoTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 600;
  color: ${brandColors.primaryDark};
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: ${baseColors.text.primary};
`;

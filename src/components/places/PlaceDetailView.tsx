"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Button } from "antd";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import PageHeader from "@/components/layout/PageHeader";
import HeaderButton from "@/components/layout/HeaderButton";
import PlaceInfoBadges from "@/components/places/PlaceInfoBadges";
import { CATEGORY_LABELS, REGION_LABELS, type Place } from "@/lib/places";
import { baseColors, brandColors, iconColors } from "@/styles/colors";

type PlaceDetailViewProps = {
  place: Place;
};

export default function PlaceDetailView({ place }: PlaceDetailViewProps) {
  const router = useRouter();
  const memo = place.memo?.trim();
  const hasLink = Boolean(place.naver_url);
  const hasInstagram = Boolean(place.insta_url);
  const showActions = hasLink || hasInstagram;

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
            <ArrowLeftIcon size={20} stroke={iconColors.default} strokeWidth={1.8} />
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
          <Title>{place.name}</Title>
          <PlaceInfoBadges place={place} variant="compact" />
          <SubInfo>
            {REGION_LABELS[place.region]} · {CATEGORY_LABELS[place.category_list]}
          </SubInfo>
          <Meta>{place.address}</Meta>
          {place.phone && <Meta>{place.phone}</Meta>}
        </Header>

        {memo && (
          <Section>
            <SectionLabel>메모</SectionLabel>
            <SectionText>{memo}</SectionText>
          </Section>
        )}

        {showActions && (
          <Actions>
            {hasLink && (
              <Button
                block
                type="primary"
                size="large"
                href={place.naver_url!}
                target="_blank"
                rel="noopener noreferrer"
              >
                네이버로 보기
              </Button>
            )}
            {hasInstagram && (
              <Button
                block
                size="large"
                href={place.insta_url!}
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <InstagramIcon
                    size={18}
                    stroke={brandColors.primaryDark}
                    strokeWidth={1.4}
                  />
                }
              >
                인스타그램 보기
              </Button>
            )}
          </Actions>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: ${baseColors.white};
  width: 100%;

  @media (min-width: 768px) {
    max-width: 640px;
    margin: 0 auto;
    min-height: 100vh;
  }
`;

const Content = styled.div`
  padding: 28px 24px 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${baseColors.text.primary};

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const SubInfo = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${baseColors.text.muted};
  line-height: 1.5;
`;

const Meta = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${baseColors.text.subtle};
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionLabel = styled.h2`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${baseColors.text.quaternary};
  text-transform: uppercase;
`;

const SectionText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: ${baseColors.text.primaryDark};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

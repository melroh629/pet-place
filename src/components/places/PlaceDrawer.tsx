import styled, { keyframes } from "styled-components";

import { Button } from "antd";

import CloseIcon from "@/components/icons/CloseIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import PlaceInfoBadges from "@/components/places/PlaceInfoBadges";
import { CATEGORY_LABELS, REGION_LABELS, type Place } from "@/lib/places";

const slideUp = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

type PlaceDrawerProps = {
  place: Place | null;
  onClose: () => void;
};

export default function PlaceDrawer({ place, onClose }: PlaceDrawerProps) {
  if (!place) {
    return null;
  }

  const memo = place.memo?.trim();
  const hasLink = Boolean(place.naver_url);
  const hasInstagram = Boolean(place.insta_url);
  const showActions = hasLink || hasInstagram;

  return (
    <Overlay role="presentation" onClick={onClose}>
      <Drawer
        role="dialog"
        aria-modal="true"
        aria-label={`${place.name} 상세 정보`}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="닫기">
          <CloseIcon size={20} stroke="#1f2937" strokeWidth={1.8} />
        </CloseButton>
        <Content>
          <Header>
            <Title>{place.name}</Title>
            <PlaceInfoBadges place={place} variant="compact" />
            <SubInfo>
              {REGION_LABELS[place.region]} ·{" "}
              {CATEGORY_LABELS[place.category_list]}
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
                      stroke="#007a4d"
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
      </Drawer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgba(26, 26, 26, 0.4);
  padding: 0;
  z-index: 100;

  @media (min-width: 768px) {
    align-items: center;
    padding: 24px;
  }
`;

const Drawer = styled.div`
  position: relative;
  width: min(640px, 100%);
  margin: 0 clamp(16px, 6vw, 48px);
  max-height: calc(100vh - 16px);
  background: #ffffff;
  border-radius: 26px 26px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 -18px 40px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 220ms ease-out;

  @media (min-width: 768px) {
    max-width: 500px;
    max-height: 80vh;
    margin: 0;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.16s ease, transform 0.16s ease;

  &:hover {
    background: #f2f6f4;
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const SubInfo = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
`;

const Meta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #374151;
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionLabel = styled.h4`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #9e9e9e;
  text-transform: uppercase;
`;

const SectionText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: #1a1a1a;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

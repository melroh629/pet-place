import styled, { keyframes } from "styled-components";

import { Button } from "antd";

import CloseIcon from "@/components/icons/CloseIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import PlaceInfoBadges from "@/components/places/PlaceInfoBadges";
import { CATEGORY_LABELS, REGION_LABELS, type Place } from "@/lib/places";
import { baseColors, brandColors, iconColors } from "@/styles/colors";

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
          <CloseIcon size={20} stroke={iconColors.default} strokeWidth={1.8} />
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
  background: ${baseColors.overlay.backdrop};
  padding: 0;
  z-index: 100;

  @media (min-width: 768px) {
    align-items: center;
    padding: 24px;
  }
`;

const Drawer = styled.div`
  position: relative;
  // width: min(640px, 100%);
  // margin: 0 clamp(16px, 6vw, 48px);
  max-height: calc(100vh - 16px);
  background: ${baseColors.white};
  border-radius: 26px 26px 0 0;
  border: 1px solid ${baseColors.border.normal};
  box-shadow: ${baseColors.shadow.medium};
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 220ms ease-out;

  @media (min-width: 768px) {
    max-width: 500px;
    max-height: 80vh;
    margin: 0;
    border-radius: 16px;
    box-shadow: ${baseColors.shadow.strong};
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
    background: ${brandColors.primarySubtle};
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  padding: 28px 24px 32px;
  width: 100%;
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
  color: ${baseColors.text.primary};
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

const SectionLabel = styled.h4`
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

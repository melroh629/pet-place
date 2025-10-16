import Link from "next/link";
import styled, { keyframes } from "styled-components";

import CloseIcon from "@/components/icons/CloseIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { CATEGORY_COLORS, CATEGORY_EMOJI, type Place } from "@/lib/places";

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

  const emojiBg = CATEGORY_COLORS[place.category];
  const memo = place.memo?.trim();
  const hasLink = Boolean(place.naverUrl);
  const hasInstagram = Boolean(place.instagramUrl);
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
            <Emoji aria-hidden="true" $bgColor={emojiBg}>
              {CATEGORY_EMOJI[place.category]}
            </Emoji>
            <Title>{place.name}</Title>
            <BadgeRow>
              <Badge>{place.region}</Badge>
              <Badge>{place.category}</Badge>
            </BadgeRow>
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
                <ActionLink
                  href={place.naverUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  네이버로 보기
                </ActionLink>
              )}
              {hasInstagram && (
                <ActionLink
                  $variant="secondary"
                  href={place.instagramUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon size={18} stroke="#007a4d" strokeWidth={1.4} />
                  인스타그램 보기
                </ActionLink>
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
`;

const Drawer = styled.div`
  position: relative;
  width: 100%;
  max-height: calc(100vh - 16px);
  background: #ffffff;
  border-radius: 26px 26px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 -18px 40px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 220ms ease-out;
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
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
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

const Emoji = styled.span<{ $bgColor: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: ${(props) => props.$bgColor};
  border: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 30px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: #e8fff4;
  color: #007a4d;
`;

const Meta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555555;
  line-height: 1.6;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
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

const ActionLink = styled(Link)<{ $variant?: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  background: ${(props) => (props.$variant === "secondary" ? "#ffffff" : "#00c27a")};
  color: ${(props) => (props.$variant === "secondary" ? "#007a4d" : "#ffffff")};
  border: ${(props) => (props.$variant === "secondary" ? "1px solid #c8e9dc" : "none")};
  transition: background 0.16s ease, box-shadow 0.16s ease, border 0.16s ease;

  &:hover {
    background: ${(props) => (props.$variant === "secondary" ? "#f2f6f4" : "#009b64")};
    box-shadow: 0 10px 22px rgba(0, 155, 100, 0.22);
  }
`;

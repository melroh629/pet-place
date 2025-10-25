"use client";

import styled from "styled-components";
import { brandColors, baseColors } from "@/styles/colors";

type FloatingReportButtonProps = {
  href: string;
};

export default function FloatingReportButton({ href }: FloatingReportButtonProps) {
  return (
    <FloatingButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="장소 제보하기"
    >
      <Icon>💬</Icon>
      <Text>장소 제보</Text>
    </FloatingButton>
  );
}

const FloatingButton = styled.a`
  position: fixed;
  bottom: 32px;
  right: 24px;
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 14px 20px;
  border-radius: 999px;

  background: ${brandColors.primary};
  color: ${baseColors.white};

  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: all 0.2s ease;

  &:hover {
    background: ${brandColors.primaryDark};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    bottom: 24px;
    right: 20px;
    padding: 12px 18px;
    font-size: 14px;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  line-height: 1;
`;

const Text = styled.span`
  line-height: 1;
  letter-spacing: -0.01em;
`;

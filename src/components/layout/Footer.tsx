"use client";

import Link from "next/link";
import styled from "styled-components";
import { baseColors, brandColors } from "@/styles/colors";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Brand>포플레이스</Brand>
        <Nav>
          <NavLink href="/">장소 둘러보기</NavLink>
          <Divider>·</Divider>
          <NavLink href="/pet-etiquette">펫티켓</NavLink>
          {/* <Divider>·</Divider>
          <NavLink href="mailto:jw.roh629@gmail.com">문의하기</NavLink> */}
        </Nav>
        <Copyright>© 2025 Paw Place. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  background: ${baseColors.white};
  border-top: 1px solid ${baseColors.border.light};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 48px 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

const Brand = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${brandColors.primaryDark};
  letter-spacing: -0.02em;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavLink = styled(Link)`
  font-size: 14px;
  color: ${baseColors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${brandColors.primaryDark};
  }
`;

const Divider = styled.span`
  color: ${baseColors.text.quaternary};
  font-size: 14px;
`;

const Copyright = styled.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${baseColors.text.muted};
`;

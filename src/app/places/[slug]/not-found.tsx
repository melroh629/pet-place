"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Button } from "antd";

import { baseColors } from "@/styles/colors";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Emoji>🐾</Emoji>
        <Title>장소를 찾을 수 없습니다</Title>
        <Description>
          요청하신 장소가 존재하지 않거나 삭제되었습니다.
        </Description>
        <ButtonGroup>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/")}
          >
            홈으로 돌아가기
          </Button>
          <Button
            size="large"
            onClick={() => router.back()}
          >
            이전 페이지
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${baseColors.white};
  padding: 24px;
`;

const Content = styled.div`
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Emoji = styled.div`
  font-size: 64px;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${baseColors.text.primary};
`;

const Description = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${baseColors.text.subtle};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 12px;
`;

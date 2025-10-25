"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import PageHeader from "@/components/layout/PageHeader";
import HeaderButton from "@/components/layout/HeaderButton";
import { COMMON_PETIQUETTE } from "@/lib/petiquette";
import { baseColors, brandColors, iconColors } from "@/styles/colors";

export default function PetiquettePage() {
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
        <Hero>
          <Badge>Pet Etiquette</Badge>
          <Title>펫티켓</Title>
          <Subtitle>
            반려동물과 함께하는 모든 장소에서 지켜야 할 기본 에티켓입니다.
            <br />
            작은 배려가 더 많은 반려동물 동반 공간을 만듭니다.
          </Subtitle>
        </Hero>

        <CardList>
          {COMMON_PETIQUETTE.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Icon>{item.icon}</Icon>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>

              <ItemList>
                {item.dos.map((doItem, index) => (
                  <ListItem key={`do-${index}`}>
                    <DoIcon>✅</DoIcon> {doItem}
                  </ListItem>
                ))}
                {item.donts.map((dontItem, index) => (
                  <ListItem key={`dont-${index}`}>
                    <DontIcon>❌</DontIcon> {dontItem}
                  </ListItem>
                ))}
              </ItemList>

              <Message>{item.message}</Message>
            </Card>
          ))}
        </CardList>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: #f7f8fa;
  width: 100%;
`;

const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 20px 100px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (min-width: 768px) {
    padding: 48px 24px 120px;
    gap: 80px;
  }
`;

const Hero = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

const Badge = styled.span`
  align-self: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${brandColors.primaryLight};
  color: ${brandColors.primaryDark};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  color: ${baseColors.text.primaryDark};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${baseColors.text.secondary};
  line-height: 1.65;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

const Icon = styled.span`
  font-size: 56px;
  line-height: 1;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: ${baseColors.text.primaryDark};
  letter-spacing: -0.01em;
`;

const DoIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  flex-shrink: 0;
`;

const DontIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  flex-shrink: 0;
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  padding: 18px 20px;
  background: ${baseColors.white};
  border-radius: 12px;
  font-size: 15px;
  line-height: 1.65;
  color: ${baseColors.text.secondary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;

const Message = styled.div`
  margin-top: 12px;
  padding: 32px 24px;
  border-radius: 16px;
  background: ${brandColors.primaryLight};
  text-align: center;
  font-size: 16px;
  line-height: 1.7;
  color: ${baseColors.text.primaryDark};
  font-weight: 500;
`;

import styled from "styled-components";
import { colors } from "../colors";
import { Inst, Logo, Men, Twitter, UserIcon, VK, Youtube } from "../icons";
import { RegistrationButton } from "./registration-button";
import { useGlobalContext } from "../context";
import { useRouter } from "next/router";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  const { user } = useGlobalContext();
  const router = useRouter();
  return (
    <HeaderWrapper>
      <Wrapper>
        <MenuWrapper>
          <Logo />
          <Menu>
            <MenuText onClick={() => router.push("/")}>Главная</MenuText>
            <MenuText onClick={() => router.push("/services")}>Услуги</MenuText>
            <MenuText onClick={() => router.push("/about")}>О нас</MenuText>
            {user && <UserIcon />}
          </Menu>
        </MenuWrapper>

        <Title>OPEN DRIVE</Title>

        {title ? (
          <Text>{title}</Text>
        ) : (
          <>
            <Text>Сеть автосервисов</Text>
            {user ? (
              <UserWrapper>
                <UserIcon /> <UserName>{user.surname}</UserName>
                <UserName>{user.name}</UserName>
              </UserWrapper>
            ) : (
              <RegistrationButton />
            )}
            <IconsWrapper>
              <Inst />
              <Youtube />
              <VK />
              <Twitter />
            </IconsWrapper>
          </>
        )}
      </Wrapper>
    </HeaderWrapper>
  );
};
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 380px;
  margin-bottom: 41px;
`;

const HeaderWrapper = styled.div`
  background-color: ${colors.header};
  width: 100%;
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

``;
const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 160px;
  line-height: 194px;
  color: ${colors.yellow};
  margin-left: -14px;
  font-family: Verdana;
`;
const Text = styled.h2`
  font-weight: 500;
  font-family: Verdana;
  font-size: 64px;
  line-height: 77px;
  color: ${colors.white};
  margin-bottom: 43px;
`;
const UserName = styled(Text)`
  margin-left: 20px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuText = styled.h2`
  :hover {
    color: ${colors.yellow};
    text-decoration: underline;
  }
  font-weight: 200;
  font-family: Verdana;
  font-size: 36px;
  color: ${colors.white};
  margin-inline: 20px;
  text-decoration: none;
  cursor: pointer;
`;

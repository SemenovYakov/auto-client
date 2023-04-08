import styled from "styled-components";
import { colors } from "../colors";
import { Inst, Logo, Men, Twitter, VK, Youtube } from "../icons";
import { RegistrationButton } from "./registration-button";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo/>
        <Title>OPEN DRIVE</Title>
        <Text>Сеть автосервисов</Text>
        <RegistrationButton />
        <IconsWrapper>
          <Inst />
          <Youtube />
          <VK />
          <Twitter />
        </IconsWrapper>
      </Wrapper>
      <Men />
    </HeaderWrapper>
  );
};

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

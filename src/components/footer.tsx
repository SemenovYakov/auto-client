import styled from "styled-components";
import { colors } from "../colors";

export const Footer = () => {
  return (
    <FooterBlock>
      <TextBlock>
        <FooterText>Время работы:</FooterText>
        <FooterText>Пн-Пт 8:00 - 19:00</FooterText>
        <FooterText>Сб-Вс 10:00 - 17:00</FooterText>
      </TextBlock>
      <TextBlock>
        <FooterText>Open Drive</FooterText>
        <FooterText>630112, Красноярск, ул. Писарева, 147а </FooterText>
        <FooterText>Телефон: +7 (383) 375 0000; +7 (383) 292 0052</FooterText>
      </TextBlock>
      <TextBlock>
        <FooterText>© ООО «OpenDrive», 2010—2022</FooterText>
      </TextBlock>
    </FooterBlock>
  );
};

const FooterBlock = styled.footer`
  margin-top: auto;
  padding-block: 25px;
  border-top: 2px solid #625d5d;
  width: 100%;
  padding-inline: 100px;
  display: flex;
  flex-direction: column;
`;

const FooterText = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 24px;
  font-weight: 400;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

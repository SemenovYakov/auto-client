import styled from "styled-components";
import { colors } from "../colors";
import { Image1, Image2 } from "../icons";

export const About = () => {
  return (
    <Wrapper>
      <Title>О нас</Title>
      <SubTitle>OPEN DRIVE</SubTitle>
      <Text>
        Основное направление деятельности нашего автосервиса - быстрый и
        качественный ремонт легковых автомобилей иностранного производства по
        приемлемой цене. OpenDrive основан в 2010 году и уже более 10 лет мы
        работаем в сфере ремонта и технического обслуживания автомобилей, что
        позволило нам получить огромный опыт и множество знаний, навыков по
        ремонту автомобилей с применением профессиональных инструментов,
        новейших технологий, модернизированного и усовершенствованного
        оборудования для ремонта и диагностики.
        <br /> • Ремонт автомобиля может производиться в Вашем присутствии, что
        способствует особой доверительной атмосфере <br />• На каждый автомобиль
        заводится индивидуальная карточка с полной историей обращений на СТО
        OpenDrive предлагает Вам:
        <br /> • Внимательных приёмщиков, которые выслушают все жалобы и
        проконсультируют относительно предстоящего ремонта • Квалифицированных
        мастеров, с многолетним опытом работы в сфере ремонта автомобилей <br />
        • Исчерпывающую техническую базу <br />• Полный набор инструмента и
        оборудования, для осуществления любого ремонта авто Это позволяет
        производить практически любой ремонт от простой замены масла в двигателе
        и регулировки развал-схождения, до капитального ремонта современных
        двигателей.
      </Text>
      <ImageDiv>
        <ImageWrapper>
          <Image1 />
        </ImageWrapper>
        <ImageWrapper>
          <Image2 />
        </ImageWrapper>
      </ImageDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 100px 100px 100px;
`;

const Title = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 46px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const SubTitle = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const Text = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

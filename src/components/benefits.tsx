import styled from "styled-components";
import { colors } from "../colors";
import { BenefitCard } from "./benefitCard";
const benefits = [
  {
    id: 1,
    text: "Выполняем все виды работ по ремонту и техническому обслуживанию автомобилей",
  },
  { id: 2, text: "Работаем круглосуточно. Без перерыров. Без выходных" },
  {
    id: 3,
    text: "Удобные способы оплаты: наличными, банковской картой, банковским переводом",
  },
  { id: 4, text: "Собственный магазин-склад автозапчастей. Низкие цены" },
  {
    id: 5,
    text: "Комната для клиентов. Бесплатный Wi-Fi, мягкие диваны. Телевизор и кофемашина",
  },
  {
    id: 6,
    text: "Гарантия на все виды работ. История обращений в автосервис. Скидки постоянным клиентам",
  },
];

export const Benefits = () => {
  return (
    <Wrapper>
      <Title>Преимущества нашей компании</Title>
      <CardsWrapper>
        {benefits.map((item) => (
          <BenefitCard text={item.text} key={item.id} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.lightbBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 100px 100px 100px;
`;
const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1500px;
`;

const Title = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 46px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const Text = styled.p`
  margin: 0;
  color: ${colors.white};
  font-family: Verdana;
  font-size: 18px;
  font-weight: 500;
`;

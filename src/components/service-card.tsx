import { Services } from "@/pages/services";
import styled from "styled-components";
import { colors } from "../colors";
import { useGlobalContext } from "../context";

export const ServiceCard = ({ id, title, price, imageUrl }: Services) => {
  const { setShowModal, setService } = useGlobalContext();

  return (
    <CardBox>
      <Card
        onClick={() => {
          setShowModal(true);
          setService({ id, title, price, imageUrl });
        }}
      >
        <Title> {title}</Title>
      </Card>
      <Price>{price} р.</Price>
    </CardBox>
  );
};
const Title = styled.text`
  font-size: 24px;
  color: ${colors.white};
  font-family: Verdana;
`;
const Card = styled.div`
  cursor: pointer;
  height: 400px;
  border: 1px solid ${colors.white};
  width: 500px;
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
  :hover {
    background-color: ${colors.header};
  }
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Price = styled.text`
  font-size: 20px;
  color: ${colors.white};
  font-family: Verdana;
`;

export const CardImage = styled.img`
  border-radius: inherit;
  transition: 0.2s linear;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

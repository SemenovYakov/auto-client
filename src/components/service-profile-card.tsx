import styled from "styled-components";
import { colors } from "../colors";
import { Services } from "@/pages/profile";

export const BookingCard = ({ title, price }: Services) => {
  return (
    <Card>
      <Title> {title}</Title>
      <Price>{price} р.</Price>
    </Card>
  );
};
const Title = styled.text`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${colors.white};
  font-family: Verdana;
`;
const Card = styled.div`
  flex-direction: column;
  cursor: pointer;
  height: 150px;
  border: 1px solid ${colors.white};
  width: 400px;
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

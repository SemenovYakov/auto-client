import styled from "styled-components";
import { colors } from "../colors";
import { Galka } from "../icons";

type Props = {
  text: string;
};
export const BenefitCard = ({ text }: Props) => {
  return (
    <CardBox>
      <Galka />
      <Text>{text}</Text>
    </CardBox>
  );
};
const CardBox = styled.div`
  height: 140px;
  width: 370px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: ${colors.light};
`;

const Text = styled.span`
  margin-left: 10px;
  color: ${colors.black};
  font-family: Verdana;
  font-weight: 200;
  font-size: 14px;
`;

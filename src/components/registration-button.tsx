import styled from "styled-components";
import { colors } from "../colors";
import { useGlobalContext } from "../context";

export const RegistrationButton = () => {
  const { setShowModal } = useGlobalContext();
  return (
    <Button onClick={() => setShowModal(true)}>
      <Text>Регистрация</Text>
    </Button>
  );
};

const Button = styled.div`
  border-radius: 64px;
  max-width: 523px;
  background-color: ${colors.grey};
  :hover {
    background-color: ${colors.yellow};
  }
  cursor: pointer;
  margin-bottom: 71px;
`;

const Text = styled.p`
  color: ${colors.white};
  font-size: 59px;
  line-height: 71px;
  font-weight: 400;
  padding: 21px 75px;
  font-family: Verdana;
  font-style: normal;
`;

import styled from "styled-components";
import { colors } from "../colors";
import { useState } from "react";
import { Login } from "./auth/login";
import { Registration } from "./auth/registration";
import { useGlobalContext } from "../context";

export const AuthModal = () => {
  const [auth, setAuth] = useState("login");
  const { showModal, setShowModal, setMistake } = useGlobalContext();
  return (
    <Layout
      showModal={showModal}
      onClick={() => {
        setShowModal(false);
        setMistake(false);
      }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <TextWrapper>
          <Text onClick={() => setAuth("login")}>Вход</Text>
          <Text onClick={() => setAuth("registration")}>Регистрация</Text>
        </TextWrapper>
        {auth === "login" ? <Login /> : <Registration />}
      </Modal>
    </Layout>
  );
};
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Layout = styled.div<{ showModal: boolean }>`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.layout};
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  border-radius: 20px;
  min-height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.modal};
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.text`
  margin-inline: 30px;
  text-decoration: none;
  color: ${colors.white};
  font-family: Verdana;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: ${colors.yellow};
  }
`;

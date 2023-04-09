import styled from "styled-components";
import { colors } from "../colors";
import { useGlobalContext } from "../context";
import { useRouter } from "next/router";

export const BookModal = () => {
  const { showModal, setShowModal, user, service, setService } =
    useGlobalContext();
  const router = useRouter();
  return (
    <Layout
      showModal={showModal}
      onClick={() => {
        setShowModal(false);
        setService(null);
      }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        {user ? (
          <>
            <TextWrapper>
              <Text>Фамилия: {user.surname}</Text>
              <Text>Имя:{user.name} </Text>
              <Text>Телефон: {user.phone}</Text>
              <Text>Услуга: {service?.title}</Text>
              <Text>Стоимость: {service?.price}</Text>
            </TextWrapper>
            <Button>
              <Text>Записаться</Text>
            </Button>
          </>
        ) : (
          <>
            <Text>Для бронирования необходимо зарегистрироваться!</Text>
            <Button onClick={() => router.push("/")}>
              <Text>Регистрация</Text>
            </Button>
          </>
        )}
      </Modal>
    </Layout>
  );
};
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  min-height: 300px;
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.modal};
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  margin: 20px;
  padding: 7px;
  width: 200px;
  border-radius: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey};
  :hover {
    background-color: ${colors.yellow};
  }
  cursor: pointer;
`;
const Text = styled.p`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  font-family: Verdana;
`;

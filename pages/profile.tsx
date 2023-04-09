import { colors } from "@/src/colors";
import { useGlobalContext } from "@/src/context";
import { Layout } from "@/src/layout";
import { withAuth } from "@/src/withAuth";
import { useRouter } from "next/router";
import styled from "styled-components";

const Profile = () => {
  const router = useRouter();
  const { user, logout } = useGlobalContext();
  return (
    <Layout title="Профиль">
      <>
        <Text>Имя: {user?.name}</Text>
        <Text>Фамилия: {user?.surname}</Text>
        <Text>Телефон: {user?.phone}</Text>
        <LogoutButton
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          <ButtonText>Выход</ButtonText>
        </LogoutButton>
      </>
    </Layout>
  );
};
export default withAuth(Profile);

const Text = styled.text`
  font-weight: 500;
  font-family: Verdana;
  font-size: 64px;
  line-height: 77px;
  color: ${colors.white};
  margin-bottom: 50px;
`;
const ButtonText = styled.text`
  font-weight: 500;
  font-family: Verdana;
  font-size: 64px;
  line-height: 77px;
  color: ${colors.white};
  margin: 0px;
`;

const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  min-width: 300px;
  background-color: ${colors.grey};
  :hover {
    background-color: ${colors.yellow};
  }
  cursor: pointer;
  margin-bottom: 50px;
`;

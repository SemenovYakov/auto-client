import { colors } from "@/src/colors";
import { BookingCard } from "@/src/components";
import { useGlobalContext } from "@/src/context";
import { UserIcon } from "@/src/icons";
import { Layout } from "@/src/layout";
import { withAuth } from "@/src/withAuth";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
export interface Services {
  id?: number;
  title: string;
  price: string;
}

const Profile = () => {
  const router = useRouter();
  const { user, logout } = useGlobalContext();
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://autoservice-production.up.railway.app/users/${user?.id}`
      );
      setServices(data.services);
    })();
  }, [user?.id]);
  return (
    <Layout title="Профиль">
      <>
        <ProfileWrapper>
          <UserIcon />
          <TextWrapper>
            <Text>Имя: {user?.name}</Text>
            <Text>Фамилия: {user?.surname}</Text>
            <Text>Телефон: {user?.phone}</Text>
          </TextWrapper>
        </ProfileWrapper>

        <Text>Мои записи</Text>
        <CardsWrapper>
          {services.length ? (
            <>
              {services?.map((item: Services) => (
                <BookingCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </>
          ) : (
            <Text>У вас пока нет записей на услуги</Text>
          )}
        </CardsWrapper>

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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  margin: 50px;
  border-bottom: 2px solid #625d5d;
`;
const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1500px;
  margin-bottom: 100px;
`;
const Text = styled.text`
  font-weight: 500;
  font-family: Verdana;
  font-size: 48px;
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

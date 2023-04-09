import { colors } from "@/src/colors";
import { BookModal, ServiceCard } from "@/src/components";
import { Layout } from "@/src/layout";
import styled from "styled-components";

export interface Services {
  id?: number;
  title?: string;
  price?: string;
  imageUrl?: string;
}
type Props = {
  services: Services[];
};
const Services = ({ services }: Props) => {
  return (
    <Layout title="Услуги">
      <>
        <CardsWrapper>
          {services?.map((item: Services) => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </CardsWrapper>
        <TextField>
          <Text>
            Обратите внимание! <br />
            Цены на составляющие зависят от вашей марки автомобиля <br />
            <br />
            <br />
            Средняя цена за работу: <br />1 час - 2500р <br />3 часа - 6500р{" "}
            <br />6 часов - 10000р
          </Text>
        </TextField>
        <BookModal />
      </>
    </Layout>
  );
};
export default Services;
export async function getServerSideProps() {
  const res = await fetch(
    "https://autoservice-production.up.railway.app/services/all"
  );
  const services = await res.json();
  return { props: { services } };
}
const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1500px;
`;
const Text = styled.text`
  color: ${colors.white};
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  margin-block: 15px;
`;
const TextField = styled.div`
  margin-block: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: ${colors.lightbBG};
`;

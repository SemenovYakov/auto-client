import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout: React.FC = ({ clildren }: any) => {
  return (
    <>
      <Header />
      {clildren}
      <Footer />
    </>
  );
};

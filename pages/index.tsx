import { About, AuthModal, Benefits, Footer, Header } from "@/src/components";
import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <About />
      <Benefits />
      <Footer />
      <AuthModal />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

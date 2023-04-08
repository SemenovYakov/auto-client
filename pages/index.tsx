import { Footer, Header } from "@/src/components";
import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

import { Footer, Header } from "@/src/components";
import styled from "styled-components";
import { PropsWithChildren } from "react";
type Props = {
  title?: string;
};

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <Container>
      <Header title={title} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

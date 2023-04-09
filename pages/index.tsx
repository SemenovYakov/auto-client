import { About, AuthModal, Benefits } from "@/src/components";

import { Layout } from "@/src/layout";
import { withAuth } from "@/src/withAuth";

const Home = () => {
  return (
    <Layout>
      <>
        <About />
        <Benefits />
        <AuthModal />
      </>
    </Layout>
  );
};
export default withAuth(Home);

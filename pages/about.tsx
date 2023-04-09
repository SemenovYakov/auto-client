import { Layout } from "@/src/layout";
import { withAuth } from "@/src/withAuth";

const AboutPage = () => {
  return <Layout title={"О нас"}></Layout>;
};
export default withAuth(AboutPage);

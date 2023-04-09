import { Layout } from "@/src/layout";
import { withAuth } from "@/src/withAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Services {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}
const Services = () => {
  const [servises, setServises] = useState<Services[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Services[]>(
          "https://autoservice-production.up.railway.app/services"
        );
        setServises(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Layout title="Услуги"></Layout>;
};
export default withAuth(Services);

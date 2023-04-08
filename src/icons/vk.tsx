import Image from "next/image";
import image from "./png/vk.png";
import styled from "styled-components";
export const VK = () => {
  return (
    <Icon>
      <Image src={image} width={60} height={60} alt="" />
    </Icon>
  );
};
const Icon = styled.div`
  display: flex;
  margin: 25px 10px 10px 0px;
  cursor: pointer;
`;

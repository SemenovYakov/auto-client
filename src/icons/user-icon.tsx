import Image from "next/image";
import image from "./png/user-icon.png";
import { useRouter } from "next/router";
export const UserIcon = () => {
  const router = useRouter();
  return <Image src={image} alt="" onClick={() => router.push("/profile")} />;
};

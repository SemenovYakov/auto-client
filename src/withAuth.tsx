import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGlobalContext } from "./context";

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const { setUser } = useGlobalContext();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user")!);
      if (!user) {
        router.push("/");
      }
      setUser(user);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

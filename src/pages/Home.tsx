import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useRouter } from "@/hooks/useRouter";
import { useEffect } from "react";

const Home = () => {
  const { routeTo } = useRouter();

  useEffect(() => {
    if (!getAccessTokenFromLocalStorage()) {
      routeTo("/my/record");
    } else {
      routeTo("/login");
    }
  }, []);
  return <div className="non-logged-in-body"></div>;
};

export default Home;

import { socialLogin } from "@/api/login";
import { useRouter } from "@/hooks/useRouter";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const OAuth = () => {
  const { routeTo } = useRouter();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") as string;

  const fetchLogin = useCallback(async () => {
    const userProfileResponse = await socialLogin(code);
    if (userProfileResponse) {
      routeTo("/page-a");
    } else {
      routeTo("/login");
    }
  }, []);

  useEffect(() => {
    fetchLogin();
  }, []);
  return <div>Loading</div>;
};

export default OAuth;

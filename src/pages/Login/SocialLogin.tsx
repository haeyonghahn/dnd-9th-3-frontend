import { socialLogin } from "@/api/login";
import Spinner from "@/components/Spinner";
import { useRouter } from "@/hooks/useRouter";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SocialLogin = () => {
  const { routeTo } = useRouter();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") as string;

  const fetchLogin = useCallback(async () => {
    const userProfileResponse = await socialLogin(code);
    if (userProfileResponse) {
      routeTo("/onboarding");
    } else {
      routeTo("/login");
    }
  }, []);

  useEffect(() => {
    fetchLogin();
  }, []);
  return (
    <>
      <Spinner />
    </>
  );
};

export default SocialLogin;

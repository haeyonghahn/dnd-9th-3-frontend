import { getCurrentUserInfoWithToken } from "@/api/login";
import { userAtom } from "@/atoms/user";
import Sidebar from "@/layout";
import Spinner from "@/components/Spinner";
import { useRouter } from "@/hooks/useRouter";
import { SidebarContent } from "@/router";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useRecoilState(userAtom);
  const { routeTo } = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfoWithToken(
      getAccessTokenFromLocalStorage()
    );

    if (!userProfileResponse) {
      routeTo("/login");
      return;
    }

    setUserProfile(userProfileResponse);
  }, []);

  useEffect(() => {
    console.log("page changed!");
    fetchUserProfile();
  }, []);

  if (!userProfile) return <Spinner />;

  return (
    <div className="general-layout">
      <Sidebar sidebarContent={SidebarContent} userProfile={userProfile} />
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default GeneralLayout;

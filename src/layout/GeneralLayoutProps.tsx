import { getCurrentUserInfoWithToken } from "@/api/login";
import { interestAtom, userAtom } from "@/atoms/user";
import Sidebar from "@/layout";
import Spinner from "@/components/Spinner";
import { useRouter } from "@/hooks/useRouter";
import { SidebarContent } from "@/router";
import { getAccessTokenFromLocalStorage } from "@/utils/accessTokenHandler";
import { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface GeneralLayoutProps {
  children: React.ReactNode;
  withSidebar?: boolean;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({
  children,
  withSidebar,
}) => {
  const [userProfile, setUserProfile] = useRecoilState(userAtom);
  const setInterests = useSetRecoilState(interestAtom);
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
    if (userProfileResponse.interestSet) {
      setInterests(userProfileResponse.interestSet);
    }
  }, []);

  useEffect(() => {
    console.log("page changed!");
    fetchUserProfile();
  }, []);

  if (!userProfile?.id) return <Spinner />;

  return (
    <div className="general-layout">
      {withSidebar ? (
        <Sidebar sidebarContent={SidebarContent} userProfile={userProfile} />
      ) : null}
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default GeneralLayout;

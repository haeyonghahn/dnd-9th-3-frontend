import { getCurrentUserInfo } from "@/api/login";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useRouter } from "@/hooks/useRouter";
import { SidebarContent } from "@/router";
import { User } from "@/types/user";
import { useCallback, useEffect, useState } from "react";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const { routeTo } = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfo();

    if (userProfileResponse === null) {
      routeTo("/login");
      return;
    }

    setUserProfile(userProfileResponse);
  }, []);

  useEffect(() => {
    console.log("page changed!");
    fetchUserProfile();
  }, [children]);

  if (!userProfile) return <div>loading...</div>;

  return (
    <div className="general-layout">
      <Sidebar sidebarContent={SidebarContent} userProfile={userProfile} />
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default GeneralLayout;

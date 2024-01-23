import { interestAtom, userAtom } from "@/atoms/user";
import MyRecordLayout from "@/layout/MyRecordLayout/MyRecordLayout";
import { User } from "@/types/user";
import { useRecoilValue } from "recoil";

const MyRecord = () => {
  const userProfile = useRecoilValue<User | null>(userAtom);
  const interestSet = useRecoilValue(interestAtom);
  console.log(userProfile, interestSet);
  return (
    <div className="myrecord-layout">
      <h1>Page C</h1>
      <MyRecordLayout />
    </div>
  );
};

export default MyRecord;

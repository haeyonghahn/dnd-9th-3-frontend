import { isDarkAtom } from "@/atoms/theme";
import Input from "@/components/Input";
import { useRecoilValue } from "recoil";

const Onboarding = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      <h3>
        굳잉에서 사용할 닉네임과 관심있는 활동 카테고리를 <br></br>
        선택해주세요.
      </h3>
      <p>관심있는 카테고리를 3가지 이상 선택해주세요.</p>
      <Input
        status="default"
        placeholder="닉네임 입력 (15자 이내)"
        theme={isDark ? "dark" : "white"}
      ></Input>
    </div>
  );
};

export default Onboarding;

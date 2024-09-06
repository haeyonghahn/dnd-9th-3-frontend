import Button from "@/components/Button";
import { useQuery } from "@tanstack/react-query";
import { getMyRecord } from "@/api/record";
import { Record } from "@/types/record";
import {
  ButtonWrapper,
  TimeLineDescription,
  TimeLineWrapper,
} from "./MyTimeLine.styled";
import TimeLineCard from "@/components/TimeLineCard";
import { colors } from "@/_shared/colors";
import { TimeLineArrow, TimeLineMonth } from "../MyRecord/MyRecord.styled";
import { useSetRecoilState } from "recoil";
import { chooseTimeLineMonthAtom } from "@/atoms/popup";
import { useRouter } from "@/hooks/useRouter";

const MyTimeLine = () => {
  const { data: myRecordData } = useQuery<Record[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
  });
  const { routeTo } = useRouter();

  const setTimeLineMonth = useSetRecoilState(chooseTimeLineMonthAtom);
  const handleTimeLineMonthPopUp = () => {
    setTimeLineMonth((prev) => !prev);
  };

  return (
    <>
      <TimeLineMonth onClick={handleTimeLineMonthPopUp}>
        2024.08
        <TimeLineArrow src="/images/vector.svg" />
      </TimeLineMonth>
      {myRecordData && myRecordData.length > 0 ? (
        <TimeLineWrapper>
          <TimeLineCard
            date="8월11일(금)"
            description="설명"
            placeName="바다"
            title="타이틀"
            src="/images/ocean.jpg"
            images={["puppy.jpg", "desert.jpg", "ocean.jpg"]}
            theme="dark"
          ></TimeLineCard>
          <TimeLineCard
            date="8월12일(토)"
            description="설명"
            placeName="사막"
            title="타이틀"
            src="/images/desert.jpg"
            images={["puppy.jpg", "desert.jpg", "ocean.jpg"]}
            theme="dark"
          ></TimeLineCard>
        </TimeLineWrapper>
      ) : (
        <>
          <TimeLineDescription>
            이번달의 첫번째 굳이데이 기록을 남겨보세요.
          </TimeLineDescription>
          <ButtonWrapper>
            <Button
              width="100%"
              text="기록하기"
              color={colors.white}
              bordercolor={colors.inputTextClor}
              backgroundcolor={colors.gray850}
              none="true"
              onClick={() => routeTo("/record")}
            ></Button>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default MyTimeLine;

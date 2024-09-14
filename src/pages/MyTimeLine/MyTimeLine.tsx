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
          {myRecordData.map((record, _) => (
            <TimeLineCard
              key={record.recordNumber}
              date=""
              description={record.description}
              placeName=""
              title={record.placeTitle}
              src=""
              images={[]}
              theme="dark"
            ></TimeLineCard>
          ))}
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

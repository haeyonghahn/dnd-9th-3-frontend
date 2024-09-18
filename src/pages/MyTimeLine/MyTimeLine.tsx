import Button from "@/components/Button";
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
import { useFetchRecord } from "@/hooks/api/useFetchRecord";

const MyTimeLine = () => {
  const { data: myRecordData } = useFetchRecord();
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
              recordNumber={record.recordNumber}
              date=""
              description={record.description}
              placeName={record.placeTitle}
              title={record.title}
              src={record.images[0].path}
              images={record.images}
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

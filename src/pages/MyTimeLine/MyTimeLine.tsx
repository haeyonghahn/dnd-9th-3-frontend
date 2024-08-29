import Button from "@/components/Button";
import { useQuery } from "@tanstack/react-query";
import { getMyRecord } from "@/api/record";
import { Record } from "@/types/record";
import {
  ButtonWrapper,
  TimeLineDescription,
  TimeLineWrapper,
} from "./MyTimeLine.styled";
import TimeLineCard from "@/components/TimeLineCard/TimeLineCard";

const MyTimeLine = () => {
  const { data: myRecordData } = useQuery<Record[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
  });

  return (
    <>
      {myRecordData && myRecordData.length > 0 ? (
        <TimeLineWrapper>
          <TimeLineCard
            date="8월11일(금)"
            description="설명"
            placeName="ocean"
            title="타이틀"
            src="/images/desert.jpg"
            images={["puppy.jpg", "desert.jpg", "ocean.jpg"]}
            theme="dark"
          ></TimeLineCard>
          <TimeLineCard
            date="8월12일(토)"
            description="설명"
            placeName="ocean"
            title="타이틀"
            src="/images/desert.jpg"
            images={["puppy.jpg", "desert.jpg", "ocean.jpg"]}
            theme="dark"
          ></TimeLineCard>
          <TimeLineCard
            date="8월13일(일)"
            description="설명"
            placeName="ocean"
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
            <Button width="100%" text="기록하기"></Button>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default MyTimeLine;

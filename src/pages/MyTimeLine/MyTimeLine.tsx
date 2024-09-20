import Button from "@/components/Button";
import {
  ButtonWrapper,
  TimeLineArrow,
  TimeLineDescription,
  TimeLineMonth,
  TimeLineWrapper,
} from "./MyTimeLine.styled";
import TimeLineCard from "@/components/TimeLineCard";
import { colors } from "@/_shared/colors";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  chooseTimeLineMonthAtom,
  deleteRecordPopUpOverAtom,
} from "@/atoms/popup";
import { useRouter } from "@/hooks/useRouter";
import { useFetchRecord } from "@/hooks/api/useFetchRecord";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import { deleteRecordNumberAtom } from "@/atoms/record";
import {
  DeleteRecordPopUp,
  PopUp,
  TimeLineMonthPopUp,
} from "@/components/PopUp";

const MyTimeLine = () => {
  const { routeTo } = useRouter();
  const { data: myRecordData } = useFetchRecord();

  const [timeLineMonth, setTimeLineMonth] = useRecoilState(
    chooseTimeLineMonthAtom
  );
  const handleTimeLineMonthPopUp = () => {
    setTimeLineMonth((prev) => !prev);
  };

  const earliestRecord =
    myRecordData && myRecordData.length > 0
      ? myRecordData?.reduce((earliest, current) => {
          return new Date(current.recordDate) > new Date(earliest.recordDate)
            ? current
            : earliest;
        })
      : "";
  const [earliestRecordDate, setEarliestRecordDate] = useState(
    earliestRecord ? earliestRecord?.recordDate : ""
  );
  const handleEarliestRecordDate = (date: string) => {
    setEarliestRecordDate(date);
  };

  const deleteRecordNumber = useRecoilValue(deleteRecordNumberAtom);
  const isDeleteRecord = useRecoilValue(deleteRecordPopUpOverAtom);

  useEffect(() => {
    setEarliestRecordDate(
      myRecordData && myRecordData.length > 0
        ? myRecordData.reduce((earliest, current) => {
            return new Date(current.recordDate) > new Date(earliest.recordDate)
              ? current
              : earliest;
          }).recordDate
        : ""
    );
  }, [myRecordData]);

  return (
    <>
      <TimeLineMonth onClick={handleTimeLineMonthPopUp}>
        {earliestRecordDate
          ? format(earliestRecordDate, "yyyy.MM", { locale: ko })
          : ""}
        <TimeLineArrow src="/images/vector.svg" />
      </TimeLineMonth>
      {myRecordData && myRecordData.length > 0 ? (
        <TimeLineWrapper>
          {myRecordData
            .filter((record, _) =>
              earliestRecordDate
                ? format(record.recordDate, "yyyyMM", { locale: ko }) ===
                  format(earliestRecordDate, "yyyyMM", { locale: ko })
                : ""
            )
            .map((record, index) => (
              <TimeLineCard
                key={index}
                recordNumber={record.recordNumber}
                date={format(record.recordDate, "M월 do(E)", { locale: ko })}
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
      {timeLineMonth ? (
        <PopUp
          state={chooseTimeLineMonthAtom}
          height="40%"
          children={
            <TimeLineMonthPopUp
              myRecordData={myRecordData ? myRecordData : []}
              earliestRecordDate={earliestRecordDate}
              setEarliestRecordDate={() =>
                handleEarliestRecordDate(earliestRecordDate)
              }
            />
          }
        />
      ) : null}
      {isDeleteRecord ? (
        <PopUp
          state={deleteRecordPopUpOverAtom}
          height="40%"
          children={
            <DeleteRecordPopUp deleteRecordNumber={deleteRecordNumber} />
          }
        />
      ) : null}
    </>
  );
};

export default MyTimeLine;

import Button from "@/components/Button";
import {
  ButtonWrapper,
  TimeLineArrow,
  TimeLineDescription,
  TimeLineMonth,
  TimeLineMonthText,
  TimeLineWrapper,
} from "./MyTimeLine.styled";
import TimeLineCard from "@/components/TimeLineCard";
import { colors } from "@/_shared/colors";
import { useRecoilState } from "recoil";
import { chooseTimeLineMonthAtom } from "@/atoms/popup";
import { useRouter } from "@/hooks/useRouter";
import { useFetchRecord } from "@/hooks/api/useFetchRecord";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import PopUp from "@/components/PopUp";
import Typography from "@/foundations/Typography";

const MyTimeLine = () => {
  const { routeTo } = useRouter();
  const formattedDates = new Set();
  const { data: myRecordData } = useFetchRecord();

  const [timeLineMonth, setTimeLineMonth] = useRecoilState(
    chooseTimeLineMonthAtom
  );
  const handleTimeLineMonthPopUp = () => {
    setTimeLineMonth((prev) => !prev);
  };

  const earliestRecord = myRecordData?.reduce((earliest, current) => {
    return new Date(current.recordDate) > new Date(earliest.recordDate)
      ? current
      : earliest;
  });
  const [earliestRecordDate, setEarliestRecordDate] = useState(
    earliestRecord?.recordDate
  );
  const handleTimeLineMonth = (date: string) => {
    setEarliestRecordDate(date);
  };

  useEffect(() => {
    setEarliestRecordDate(
      myRecordData?.reduce((earliest, current) => {
        return new Date(current.recordDate) > new Date(earliest.recordDate)
          ? current
          : earliest;
      }).recordDate
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
            .map((record, _) => (
              <TimeLineCard
                key={record.recordNumber}
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
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
              <div
                style={{
                  marginTop: "10%",
                  textAlign: "left",
                }}
              >
                <Typography text="월 선택하기" type="h2" />
              </div>
              {myRecordData?.map((record, index) => {
                const formattedDate = format(
                  new Date(record.recordDate),
                  "yyyy.MM",
                  { locale: ko }
                );

                if (!formattedDates.has(formattedDate)) {
                  formattedDates.add(formattedDate);
                  return (
                    <div
                      key={index}
                      onClick={() => handleTimeLineMonth(formattedDate)}
                      style={{ cursor: "pointer" }}
                    >
                      <TimeLineMonthText
                        className={
                          (earliestRecordDate
                            ? format(earliestRecordDate, "yyyy.MM", {
                                locale: ko,
                              })
                            : "") === formattedDate
                            ? "selected"
                            : ""
                        }
                      >
                        <Typography text={formattedDate} type="h2" />
                      </TimeLineMonthText>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          }
        />
      ) : null}
    </>
  );
};

export default MyTimeLine;

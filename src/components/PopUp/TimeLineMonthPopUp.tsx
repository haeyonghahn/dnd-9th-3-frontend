import Typography from "@/foundations/Typography";
import { TimeLineMonthText } from "@/pages/MyTimeLine/MyTimeLine.styled";
import { IRecord } from "@/types/record";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface TimeLineMonthPopUpProps {
  myRecordData: IRecord[] | null;
  setEarliestRecordDate: (date: string) => void;
  earliestRecordDate: string;
}

const TimeLineMonthPopUp = ({ ...props }: TimeLineMonthPopUpProps) => {
  const handleTimeLineMonth = (date: string) => {
    props.setEarliestRecordDate(date);
  };
  const formattedDates = new Set();
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div
        style={{
          marginTop: "10%",
          textAlign: "left",
        }}
      >
        <Typography text="월 선택하기" type="h2" />
      </div>
      {props.myRecordData?.map((record, index) => {
        const formattedDate = format(new Date(record.recordDate), "yyyy.MM", {
          locale: ko,
        });

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
                  (props.earliestRecordDate
                    ? format(props.earliestRecordDate, "yyyy.MM", {
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
  );
};

export default TimeLineMonthPopUp;

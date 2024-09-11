import { useCalendar } from "@/hooks/useCalendar";
import {
  CalendarHeader,
  CalendarSelectHeader,
  Day,
  DayDate,
  DayDateWrapper,
  DayWrapper,
} from "./Calendar.styled";
import Button from "@/components/Button";
import { addMonths, format, isAfter, subMonths } from "date-fns";
import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { useSetRecoilState } from "recoil";
import { recordDateAtom } from "@/atoms/record";
import { recordDayPopUpAtom } from "@/atoms/popup";
import { useState } from "react";

interface ICalendar {
  date: Date;
}

const Calendar = ({ date }: ICalendar) => {
  const calendar = useCalendar();
  const [selectedDay, setSelectedDay] = useState<Date>(date);
  const setRecordDay = useSetRecoilState(recordDateAtom);
  const setRecordDayPopUp = useSetRecoilState(recordDayPopUpAtom);

  const handlePrevCalendar = () => {
    calendar.setCurrentDate((prev) => subMonths(prev, 1));
  };
  const handleNextCalendar = () => {
    calendar.setCurrentDate((prev) => addMonths(prev, 1));
  };
  const handleDay = (day: Date) => {
    setSelectedDay(day);
  };
  const handleClick = (day: Date) => {
    setRecordDayPopUp((prev) => !prev);
    setRecordDay(day);
  };
  return (
    <>
      <CalendarHeader>
        <Typography text="활동 날짜 선택" type="h2" />
      </CalendarHeader>
      <CalendarSelectHeader>
        <Icon
          icon="leftArrow"
          minX="-8"
          minY="-5"
          width="30"
          height="35"
          onClick={handlePrevCalendar}
        />
        <Typography text={`${format(calendar.currentDate, "M")}월`} type="h2" />
        <Icon
          icon="rightArrow"
          minX="-8"
          minY="-5"
          width="30"
          height="35"
          onClick={handleNextCalendar}
        />
      </CalendarSelectHeader>
      <DayDateWrapper>
        {calendar.dayDate.map((date, index) => (
          <DayDate key={index}>{date}</DayDate>
        ))}
      </DayDateWrapper>
      {calendar.weekCalendar.map((week, weekIndex) => (
        <DayWrapper key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day
              onClick={() =>
                handleDay(
                  new Date(
                    calendar.currentDate.getFullYear(),
                    calendar.currentDate.getMonth(),
                    day
                  )
                )
              }
              className={
                Number(format(selectedDay, "d")) === day && day !== 0
                  ? "selected"
                  : isAfter(
                      new Date(),
                      new Date(
                        calendar.currentDate.getFullYear(),
                        calendar.currentDate.getMonth(),
                        day
                      )
                    )
                  ? ""
                  : "disable"
              }
              key={dayIndex}
            >
              {day === 0 ? null : day}
            </Day>
          ))}
        </DayWrapper>
      ))}
      <div style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "5%" }}>
        <Button
          width="100%"
          text="선택완료"
          onClick={() => handleClick(selectedDay)}
        />
      </div>
    </>
  );
};

export default Calendar;

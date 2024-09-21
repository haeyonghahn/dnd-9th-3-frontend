import { useCalendar } from "@/hooks/useCalendar";
import {
  CalendarButton,
  CalendarHeader,
  CalendarSelectHeader,
  Day,
  DayDate,
  DayDateWrapper,
  DayWrapper,
} from "./Calendar.styled";
import Button from "@/components/Button";
import { addMonths, format, isAfter, isEqual, subMonths } from "date-fns";
import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { useSetRecoilState } from "recoil";
import { recordDateAtom } from "@/atoms/record";
import { recordDayPopUpAtom } from "@/atoms/popup";
import { useState } from "react";

interface CalendarProps {
  date: Date | null;
}

const Calendar = ({ date }: CalendarProps) => {
  const calendar = useCalendar();
  const [selectedDay, setSelectedDay] = useState<Date | null>(date);
  const setRecordDay = useSetRecoilState(recordDateAtom);
  const setRecordDayPopUp = useSetRecoilState(recordDayPopUpAtom);

  const handlePrevCalendar = () => {
    calendar.setCurrentDate((prev) => subMonths(prev, 1));
  };
  const handleNextCalendar = () => {
    calendar.setCurrentDate((prev) => addMonths(prev, 1));
  };
  const handleDay = (day: Date) => {
    if (isAfter(new Date(), day)) {
      setSelectedDay(day);
    }
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
                day !== 0 &&
                selectedDay &&
                isEqual(
                  selectedDay,
                  new Date(
                    calendar.currentDate.getFullYear(),
                    calendar.currentDate.getMonth(),
                    day
                  )
                )
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
      <CalendarButton>
        <Button
          width="100%"
          text="선택완료"
          onClick={() => selectedDay && handleClick(selectedDay)}
        />
      </CalendarButton>
    </>
  );
};

export default Calendar;

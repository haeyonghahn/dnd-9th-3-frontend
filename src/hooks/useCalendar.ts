import { getDaysInMonth, startOfMonth } from "date-fns";
import { useState } from "react";

const calendarLength = 35;
const defaultTrashValue = 0;
const dayOfWeek = 7;
const days = ["일", "월", "화", "수", "목", "금", "토"];

export const useCalendar = () => {
  const firstDayOfMonth = startOfMonth(new Date());
  const [currentDate, setCurrentDate] = useState(firstDayOfMonth);
  const totalMonthDays = getDaysInMonth(currentDate);

  const prevDays = Array.from({
    length: Math.max(0, currentDate.getDay()),
  }).map(() => defaultTrashValue);

  const currentDays = Array.from({
    length: totalMonthDays,
  }).map((_, i) => i + 1);

  const nextDays = Array.from({
    length: calendarLength - currentDays.length - prevDays.length,
  }).map(() => defaultTrashValue);

  const currentCalendar = prevDays.concat(currentDays, nextDays);
  const weekCalendar = currentCalendar.reduce((acc: number[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / dayOfWeek);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  return {
    weekCalendar: weekCalendar,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
    dayDate: days,
  };
};

import { useEffect, useState, type ReactNode } from "react";
import { CalendarContext } from "./CalendarContext";
import type { CalendarContextType } from "./Calendar.types";

export function CalendarProvider({ children }: { children: ReactNode }) {
  const dateNow = new Date();

  const [year, setYear] = useState<number>(dateNow.getFullYear());
  const [month, setMonth] = useState<number>(dateNow.getMonth());
  const [monthGrid, setMonthGrid] = useState<Date[]>([]);

  useEffect(() => {
    const getMonthGrid = () => {
      const firstDayOfMonth = new Date(year, month, 1);
      const startWeekday = firstDayOfMonth.getDay(); // 0-6 
      const days = [];

      // start from the Sunday of the first week 
      const start = new Date(year, month, 1 - startWeekday);

      for (let i = 0; i < 42; i++) { // 6 weeks x 7 days 
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        days.push(d);
      }
      
      setMonthGrid(days);
    };

    getMonthGrid();
  }, [month, year]);


  const value: CalendarContextType = {
    year,
    setYear,
    month,
    setMonth,
    monthGrid
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}

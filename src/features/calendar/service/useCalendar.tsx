import { useContext } from "react";
import { CalendarContext } from "./CalendarContext";

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used inside <CalendarProvider>");
  }
  return context;
}

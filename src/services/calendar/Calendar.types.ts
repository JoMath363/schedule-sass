import type { Dispatch, SetStateAction } from "react";

export type CalendarContextType = {
  year: number;
  month: number;
  setYear: Dispatch<SetStateAction<number>>;
  setMonth: Dispatch<SetStateAction<number>>;
  monthGrid: Date[];
};
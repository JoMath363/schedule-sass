import { createContext } from "react";
import type { CalendarContextType } from "./Calendar.types";

export const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

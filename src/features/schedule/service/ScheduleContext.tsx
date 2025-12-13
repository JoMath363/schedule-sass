import { createContext } from "react";
import type { ScheduleContextType } from "./Schedule.types";

export const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

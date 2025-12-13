import type { AppointmentCardProps } from "../components/AppointmentCard";

export type ScheduleContextType = {
  shiftStart: number;
  shiftEnd: number;
  appointments: AppointmentCardProps[]
};

export type AppointmentPreview = {
  id: string;
  time: string;
  title: string;
  client: string;
};
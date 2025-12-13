import { useEffect, useState, type ReactNode } from "react";
import { ScheduleContext } from "./ScheduleContext";
import type { ScheduleContextType } from "./Schedule.types";
import mockedAppointments from "./appointments.json";
import type { AppointmentCardProps } from "../components/AppointmentCard";

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const shiftStart = 10;
  const shiftEnd = 18;

  const [appointments, setAppointments] = useState<AppointmentCardProps[]>([]);

  useEffect(() => {
    const mapAppointmentPositions = () => {
      const map: Record<string, number> = {};
      const newAppointments: AppointmentCardProps[] = mockedAppointments.appointments;;

      for (const a of newAppointments) {
        const date = new Date(a.time);
        const hour = date.getHours();
        const minutes = date.getMinutes();

        if (!map[hour]) {
          a.left = 0;
          map[hour] = 1;
        } else {
          a.left = map[hour];
          map[hour]++;
        }

        const minutesDiff = (hour * 60 + minutes) - (shiftStart * 60);
        const shiftInMinutes = (shiftEnd * 60) - (shiftStart * 60);

        a.top = minutesDiff / shiftInMinutes * 100;
      };

      setAppointments(newAppointments);
    };

    mapAppointmentPositions();
  });

  const value: ScheduleContextType = {
    shiftStart,
    shiftEnd,
    appointments
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}

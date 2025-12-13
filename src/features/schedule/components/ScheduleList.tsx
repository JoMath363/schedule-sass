import stylex from "@stylexjs/stylex";
import AppointmentCard from "./AppointmentCard";
import { useSchedule } from "../service/useSchedule";

const styles = stylex.create({
  ScheduleList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderLeft: "solid var(--text) 3px",
    position: "relative"
  },
  ScheduleListHourTitle: {
    padding: "0.5rem 0 0 0.5rem", //Top & Left Padding
    fontSize: "1.2rem",
    height: "var(--scheduleRowHeight)",
    color: "var(--text)",
    borderTop: "dashed var(--subtext) 1px"
  },
  ScheduleListAppointments: {
    position: "absolute",
    left: "5rem"
  }
});

const ScheduleList = () => {
  const { shiftEnd, shiftStart, appointments } = useSchedule();

  const getShiftHoursList = () => {
    const shiftHours = [];

    for (let i = shiftStart; i < shiftEnd; i++) {
      shiftHours.push(i);
    }

    return shiftHours;
  };

  return (
    <div className={stylex(styles.ScheduleList)}>
      {
        getShiftHoursList().map((hour, i) =>
          <h2 className={stylex(styles.ScheduleListHourTitle)} key={i}>
            {hour}:00
          </h2>
        )
      }

      <div className={stylex(styles.ScheduleListAppointments)}>
        {
          appointments.map((a, j) => <AppointmentCard key={j} {...a} />)
        }
      </div>
    </div>
  );
};

export default ScheduleList;


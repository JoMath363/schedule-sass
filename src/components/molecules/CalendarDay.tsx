import stylex from "@stylexjs/stylex";
import { isToday } from "../../utils/helper";
import { useCalendar } from "../../services/calendar/useCalendar";

type CalendarDayProps = {
  date: Date
}

const styles = stylex.create({
  CalendarDayOn: {
    display: "flex",
    border: "solid 1px var(--subtext)",
    color: "var(--subtext)",
    padding: "1rem"
  },
  CalendarDayOff: {
    display: "flex",
    border: "solid 1px var(--subtext)",
    color: "var(--subtext)",
    padding: "1rem",
    opacity: 0.5
  },
  CalendarToday: {
    display: "flex",
    border: "solid 1px var(--primary)",
    color: "var(--primary)",
    padding: "1rem",
    opacity: 0.5
  }
});

const CalendarDay = ({ date }: CalendarDayProps) => {
  const { month } = useCalendar();


  if (isToday(date))
    return (
      <span className={stylex(styles.CalendarToday)}>
        {date.getDate()}
      </span>
    );

  if (date.getMonth() == month)
    return (
      <span className={stylex(styles.CalendarDayOn)}>
        {date.getDate()}
      </span>
    );

  return (
    <span className={stylex(styles.CalendarDayOff)}>
      {date.getDate()}
    </span>
  );
};

export default CalendarDay;

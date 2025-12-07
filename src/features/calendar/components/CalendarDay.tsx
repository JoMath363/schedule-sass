import stylex from "@stylexjs/stylex";
import { isToday } from "../../../utils/helper";
import { useCalendar } from "../service/useCalendar";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format";

type CalendarDayProps = {
  date: Date
}

const styles = stylex.create({
  CalendarDay: {
    display: "flex",
    flexDirection: "column",
    background: "var(--surface)",
    color: "var(--text)",
    padding: "0.5rem",
    textDecoration: "none",
    ":hover": {
      background: "var(--background)",
      cursor: "pointer"
    }
  },
  CalendarDayTextOff: {
    color: "var(--text)",
    padding: "0.2rem 0.5rem",
    opacity: "0.4"
  },
  CalendarDayTextOn: {
    color: "var(--text)",
    padding: "0.2rem 0.5rem",
  },
  CalendarDayTextToday: {
    color: "var(--surface)",
    width: "fit-content",
    padding: "0.2rem 0.5rem",
    borderRadius: "0.2rem",
    background: "var(--primary)"
  }
});

const CalendarDay = ({ date }: CalendarDayProps) => {
  const { month } = useCalendar();

  return (
    <Link to={`/schedule/${formatDate(date)}`} className={stylex(styles.CalendarDay)}>
      {
        isToday(date) ? (
          <span className={stylex(styles.CalendarDayTextToday)}>
            {date.getDate()}
          </span>
        ) : (
          date.getMonth() == month ? (
            <span className={stylex(styles.CalendarDayTextOn)}>
              {date.getDate()}
            </span>
          ) : (
            <span className={stylex(styles.CalendarDayTextOff)}>
              {date.getDate()}
            </span>
          )
        )
      }
    </Link>
  );
};

export default CalendarDay;

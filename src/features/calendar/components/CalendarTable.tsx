import stylex from "@stylexjs/stylex";
import { useCalendar } from "../service/useCalendar";
import CalendarDay from "./CalendarDay";

const styles = stylex.create({
  CalendarTable: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  CalendarTableHead: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
  },
  CalendarTableWeekDay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--text)",
    color: "white",
    height: "2.5rem",
  },
  CalendarTableBody: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    height: "100%",
    border: "solid 1px var(--text)",
    background: "var(--text)",
    gap: "1px"
  }
});

const CalendarTable = () => {
  const { monthGrid } = useCalendar();

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabádo"
  ];

  return (
    <div className={stylex(styles.CalendarTable)}>
      <div className={stylex(styles.CalendarTableHead)}>
        {weekDays.map((weekDay, i) =>
          <span className={stylex(styles.CalendarTableWeekDay)} key={i}>
            {weekDay}
          </span>
        )}
      </div>

      <div className={stylex(styles.CalendarTableBody)}>
        {monthGrid.map((date, i) => <CalendarDay date={date} key={i}/>)}
      </div>
    </div>
  );
};

export default CalendarTable;

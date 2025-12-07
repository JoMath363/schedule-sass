import stylex from "@stylexjs/stylex";
import PrimaryBtn from "../atom/PrimaryBtn";
import SelectInput from "../atom/SelectInput";
import { PiPlusBold } from "react-icons/pi";
import { useCalendar } from "../../services/calendar/useCalendar";

const styles = stylex.create({
  CalendarBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  CalendarBarDate: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem"
  }
});

const CalendarBar = () => {
  const { year, setYear, month, setMonth } = useCalendar();


  const yearOptions = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" }
];

const monthOptions = [
  { label: "Janeiro", value: "0" },
  { label: "Fevereiro", value: "1" },
  { label: "Dezembro", value: "11" }
];

  return (
    <div className={stylex(styles.CalendarBar)}>
      <div className={stylex(styles.CalendarBarDate)}>
        <SelectInput
          options={yearOptions}
          input={String(year)}
          setInput={(value) => setYear(Number(value))}
        />
        <SelectInput
          options={monthOptions}
          input={String(month)}
          setInput={(value) => setMonth(Number(value))}
        />
      </div>
      <PrimaryBtn icon={PiPlusBold} text="Agendar" link="" />
    </div>
  );
};

export default CalendarBar;

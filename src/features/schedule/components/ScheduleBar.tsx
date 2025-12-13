import stylex from "@stylexjs/stylex";
import { PiArrowLeftBold, PiPlusBold } from "react-icons/pi";
import PrimaryBtn from "../../../shared/atom/PrimaryBtn";
import IconBtn from "../../../shared/atom/IconBtn";

const styles = stylex.create({
  ScheduleBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const ScheduleBar = () => {
  return (
    <div className={stylex(styles.ScheduleBar)}>
      <IconBtn icon={PiArrowLeftBold} link="/calendar"/>
      <PrimaryBtn icon={PiPlusBold} text="Agendar" link="" />
    </div>
  );
};

export default ScheduleBar;

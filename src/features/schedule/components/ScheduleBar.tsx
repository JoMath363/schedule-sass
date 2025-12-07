import stylex from "@stylexjs/stylex";
import { PiPlusBold } from "react-icons/pi";
import PrimaryBtn from "../../../shared/atom/PrimaryBtn";
import WelcomeMessage from "../../../shared/organisms/WelcomeMessage";

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
      <WelcomeMessage />
      <PrimaryBtn icon={PiPlusBold} text="Agendar" link="" />
    </div>
  );
};

export default ScheduleBar;

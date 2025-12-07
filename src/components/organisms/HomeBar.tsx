import stylex from "@stylexjs/stylex";
import WelcomeMessage from "../molecules/WelcomeMessage";
import PrimaryBtn from "../atom/PrimaryBtn";
import { PiPlusBold } from "react-icons/pi";

const styles = stylex.create({
  HomeBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const HomeBar = () => {
  return (
    <div className={stylex(styles.HomeBar)}>
      <WelcomeMessage />
      <PrimaryBtn icon={PiPlusBold} text="Agendar" link="" />
    </div>
  );
};

export default HomeBar;

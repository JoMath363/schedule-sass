import stylex from "@stylexjs/stylex";
import { PiPlusBold } from "react-icons/pi";
import WelcomeMessage from "./WelcomeMessage";
import PrimaryBtn from "../atom/PrimaryBtn";

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

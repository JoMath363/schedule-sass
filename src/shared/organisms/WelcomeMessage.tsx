import stylex from "@stylexjs/stylex";
import { PiHandWavingBold, PiCalendarDotsBold } from "react-icons/pi";
import SecondaryBtn from "../atom/SecondaryBtn";
import { getCurrentMonth } from "../../utils/helper";

const styles = stylex.create({
  WelcomeMessage: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.4rem"
  }
});

const WelcomeMessage = () => {
  const getGrettings = () => {
    const hours = new Date().getHours();

    if (hours < 12)
      return "Bom dia";

    if (hours < 19)
      return "Boa tarde";

    return "Boa noite";
  };

  

  return (
    <div>
      <p className={stylex(styles.WelcomeMessage)}>
        <span>{getGrettings()}, <b>Usuário!</b></span>
        <PiHandWavingBold />
      </p>
      <SecondaryBtn
        link="/calendar"
        icon={PiCalendarDotsBold}
        text={`Veja sua agenda de ${getCurrentMonth()}`}
      />
    </div>
  );
};

export default WelcomeMessage;

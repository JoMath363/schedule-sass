import stylex from "@stylexjs/stylex";
import { PiHandWavingBold, PiCalendarDotsBold } from "react-icons/pi";
import { capitalizeWord } from "../../utils/format";
import SecondaryBtn from "../atom/SecondaryBtn";

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

  const getMonth = () => {
    const monthName = new Date().toLocaleString("pt-BR", { month: "long" });
    return capitalizeWord(monthName);
  };

  return (
    <div>
      <p className={stylex(styles.WelcomeMessage)}>
        <span>{getGrettings()}, <b>Usuário!</b></span>
        <PiHandWavingBold />
      </p>
      <SecondaryBtn
        link={`/calendar/${new Date().getMonth()}`}
        icon={PiCalendarDotsBold}
        text={`Veja sua agenda de ${getMonth()}`}
      />
    </div>
  );
};

export default WelcomeMessage;

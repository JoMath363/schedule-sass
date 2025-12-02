import stylex from "@stylexjs/stylex";
import { PiHandWavingBold, PiPlusBold, PiCalendarDotsBold } from "react-icons/pi";
import PrimaryBtn from "../atom/PrimaryBtn";
import { capitalizeWord } from "../../utils/format";
import SecondaryBtn from "../atom/SecondaryBtn";

const styles = stylex.create({
  HomeBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  HomeBarWelcomeMessage: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.4rem"
  }
});

const HomeBar = () => {
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
    <div className={stylex(styles.HomeBar)}>
      <div>
        <p className={stylex(styles.HomeBarWelcomeMessage)}>
          <span>{getGrettings()}, <b>Usuário!</b></span>
          <PiHandWavingBold />
        </p>
        <SecondaryBtn
          link={`/calendar/${new Date().getMonth()}`}
          icon={PiCalendarDotsBold}
          text={`Veja sua agenda de ${getMonth()}`}
        />
      </div>

      <PrimaryBtn
        icon={PiPlusBold}
        text="Agendar"
        action={() => { }}
      />

    </div>
  );
};

export default HomeBar;

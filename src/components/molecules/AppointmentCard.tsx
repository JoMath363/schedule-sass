import stylex from "@stylexjs/stylex";
import SecondaryBtn from "../atom/SecondaryBtn";
import {PiCalendarCheckBold } from "react-icons/pi";

const styles = stylex.create({
  AppointmentCard: {
    display: "flex",
    flexDirection: "column",
    background: "var(--surface)",
    width: "100%",
    height: "13.5rem",
    borderRadius: "0.5rem",
    padding: "1rem 0",
    color: "var(--subtext)",
    gap: "1.5rem"
  },
  AppointmentCardHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  AppointmentCardTitle: {
    fontSize: "1.2rem"
  },
  AppointmentCardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  }
});

const AppointmentCard = () => {
  return (
    <div className={stylex(styles.AppointmentCard)}>
      <div className={stylex(styles.AppointmentCardHead)}>
        <h2 className={stylex(styles.AppointmentCardTitle)}>Agendamentos Próximos </h2>
        <SecondaryBtn
          link="/appointments"
          text="Agendamentos"
          icon={PiCalendarCheckBold}
        />
      </div>

      <div className={stylex(styles.AppointmentCardBody)}>
        
      </div>
    </div>
  );
};

export default AppointmentCard;

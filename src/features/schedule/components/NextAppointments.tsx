import stylex from "@stylexjs/stylex";
import SecondaryBtn from "../../../shared/atom/SecondaryBtn";
import {PiCalendarCheckBold } from "react-icons/pi";

const styles = stylex.create({
  NextAppointment: {
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
  NextAppointmentHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  NextAppointmentTitle: {
    fontSize: "1.2rem"
  },
  NextAppointmentBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  }
});

const NextAppointment = () => {
  return (
    <div className={stylex(styles.NextAppointment)}>
      <div className={stylex(styles.NextAppointmentHead)}>
        <h2 className={stylex(styles.NextAppointmentTitle)}>Agendamentos Próximos </h2>
        <SecondaryBtn
          link="/appointments"
          text="Agendamentos"
          icon={PiCalendarCheckBold}
        />
      </div>

      <div className={stylex(styles.NextAppointmentBody)}>
        
      </div>
    </div>
  );
};

export default NextAppointment;

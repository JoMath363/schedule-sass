import stylex from "@stylexjs/stylex";
import ClientCard from "../molecules/ClientCard";
import AppointmentCard from "../molecules/AppointmentCard";

const styles = stylex.create({
  HomeSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem"
  }
});

const HomeSummary = () => {
  return (
    <div className={stylex(styles.HomeSummary)}>
      <ClientCard />
      <AppointmentCard />
    </div>
  );
};

export default HomeSummary;

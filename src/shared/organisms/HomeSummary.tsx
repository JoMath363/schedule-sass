import stylex from "@stylexjs/stylex";
import ClientCard from "../../features/client/components/ClientCard";
import NextAppointments from "../../features/schedule/components/NextAppointments";

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
      <NextAppointments />
    </div>
  );
};

export default HomeSummary;

import stylex from "@stylexjs/stylex";
import ClientSummary from "../../features/client/ClientSummary";

const styles = stylex.create({
  HomeSummary: {
    display: "flex",
    gap: "1.5rem"
  }
});

const HomeSummary = () => {
  return (
    <div className={stylex(styles.HomeSummary)}>
      <ClientSummary/>
    </div>
  );
};

export default HomeSummary;

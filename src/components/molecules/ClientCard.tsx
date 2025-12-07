import stylex from "@stylexjs/stylex";
import SecondaryBtn from "../atom/SecondaryBtn";
import { PiUserBold, PiArrowUpRight } from "react-icons/pi";

const styles = stylex.create({
  ClientCard: {
    display: "flex",
    flexDirection: "column",
    background: "var(--surface)",
    width: "30%",
    borderRadius: "0.5rem",
    padding: "1rem 0",
    color: "var(--subtext)",
    gap: "1.5rem"
  },
  ClientCardHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  ClientCardTitle: {
    fontSize: "1.2rem"
  },
  ClientCardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  ClientCardCounter: {
    color: "var(--text)",
    fontSize: "3rem"
  },
  ClientCardFooter: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    justifyContent: "space-between",
    borderTop: "1px solid var(--subtext)",
    paddingTop: "1rem"
  },
  ClientCardPositive: {
    display: "flex",
    alignItems: "center",
    color: "green",
    fontSize: "1rem"
  },
  ClientCardNegative: {
    display: "flex",
    alignItems: "center",
    color: "red",
    fontSize: "1rem"
  },
  ClientCardText: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    gap: "0.4rem"
  },
});

const ClientCard = () => {
  return (
    <div className={stylex(styles.ClientCard)}>
      <div className={stylex(styles.ClientCardHead)}>
        <h2 className={stylex(styles.ClientCardTitle)}>Clientes</h2>
        <SecondaryBtn
          link="/clients"
          text="Clientes"
          icon={PiUserBold}
        />
      </div>

      <div className={stylex(styles.ClientCardBody)}>
        <h2 className={stylex(styles.ClientCardCounter)}>
          293
        </h2>
        <p>Total</p>
      </div>

      <div className={stylex(styles.ClientCardFooter)}>
        <p className={stylex(styles.ClientCardText)}>
          <span className={stylex(styles.ClientCardPositive)}>
            + 12
          </span>
          Clientes Novos
        </p>
        <p className={stylex(styles.ClientCardPositive)}>
          <PiArrowUpRight />
          %47
        </p>
      </div>
    </div>
  );
};

export default ClientCard;

import stylex from "@stylexjs/stylex";
import SecondaryBtn from "../../components/atom/SecondaryBtn";
import { PiUserBold } from "react-icons/pi";

const styles = stylex.create({
  ClientCard: {
    background: "var(--surface)",
    width: "500px",
    borderRadius: "0.5rem",
    padding: "1rem",

  },
  ClientCardHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ClientCardTitle: {
    fontSize: "1.2rem"
  }
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
    </div>
  );
};

export default ClientCard;

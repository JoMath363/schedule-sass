import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  logo: {
    placeContent: "center"
  },
  logoImg: {
    height: "2rem",
    width: "2rem"
  },
});

const LogoBtn = () => {
  return (
    <Link className={stylex(styles.logo)} to="/home">
      <img className={stylex(styles.logoImg)} src="/schedule-sass-logo.png" alt="Schedule Logo" />
    </Link>
  );
};

export default LogoBtn;

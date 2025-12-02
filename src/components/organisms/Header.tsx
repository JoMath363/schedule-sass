import stylex from "@stylexjs/stylex";

/* Components */
import SearchBar from "../molecules/SearchBar";
import IconBtn from "../atom/IconBtn";
import { PiCalendarDotsBold, PiBellBold } from "react-icons/pi";
import ProfileDropdown from "../molecules/ProfileDropdown";
import { Link } from "react-router-dom";

const styles = stylex.create({
  Header: {
    background: "var(--surface)",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem"
  },
  Logo: {
    placeContent: "center",
    transition: "color 0.2s ease, transform 0.2s ease",
    ":hover": {
      color: "var(--text)",
      transform: "scale(1.1)"
    }
  },
  LogoImg: {
    height: "2rem",
    width: "2rem"
  },
  HeaderRight: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem"
  }
});

const Header = () => {
  return (
    <header className={stylex(styles.Header)}>
      <Link className={stylex(styles.Logo)} to="/">
        <img className={stylex(styles.LogoImg)} src="/schedule-sass-logo.png" alt="Schedule Logo" />
      </Link>

      <SearchBar />

      <div className={stylex(styles.HeaderRight)}>
        <IconBtn link="/calendar" action={() => { }} icon={PiCalendarDotsBold} />
        <IconBtn action={() => { }} icon={PiBellBold} />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
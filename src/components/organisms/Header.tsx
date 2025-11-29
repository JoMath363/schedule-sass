import stylex from "@stylexjs/stylex";

/* Components */
import SearchBar from "../molecules/SearchBar";
import IconBtn from "../atom/IconBtn";
import { PiCalendarDotsBold, PiBellBold } from "react-icons/pi";
import LogoBtn from "../atom/LogoBtn";
import ProfileBtn from "../atom/ProfileBtn";

const styles = stylex.create({
  header: {
    background: "var(--surface)",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem"
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem"
  }
});

const Header = () => {
  return (
    <header className={stylex(styles.header)}>
      <LogoBtn/>

      <SearchBar />

      <div className={stylex(styles.headerRight)}>
        <IconBtn link="/home" action={() => { }} Icon={PiCalendarDotsBold} />
        <IconBtn action={() => { }} Icon={PiBellBold} />
        <ProfileBtn/>
      </div>
    </header>
  );
};

export default Header;
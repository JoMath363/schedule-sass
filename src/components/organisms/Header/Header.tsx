import { Link } from "react-router-dom";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./Header.css";
import IconBtn from "../../atom/IconBtn";
import { PiCalendarDotsBold, PiBellBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-logo" to="/home">
        <img src="/schedule-sass-logo.png" alt="Schedule Logo" />
      </Link>

      <SearchBar />

      <div className="flex-container-with-gap">
        <IconBtn link="/home" action={() => { }} Icon={PiCalendarDotsBold}  />
        <IconBtn action={() => { }} Icon={PiBellBold} />
      </div>
    </header>
  );
};

export default Header;
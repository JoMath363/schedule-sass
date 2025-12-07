import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  Profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "12rem"
  },
  ProfileImg: {
    height: "2rem",
    width: "2rem"
  },
});

const ProfileDropdown = () => {
  return (
    <Link className={stylex(styles.Profile)} to="/home">
      <img className={stylex(styles.ProfileImg)} src="/default-profile-picture.jpg" alt="Schedule Profile" />
    </Link>
  );
};

export default ProfileDropdown;

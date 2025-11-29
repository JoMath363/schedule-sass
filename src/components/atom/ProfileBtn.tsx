import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "12rem"
  },
  profileImg: {
    height: "2rem",
    width: "2rem"
  },
});

const ProfileBtn = () => {
  return (
    <Link className={stylex(styles.profile)} to="/home">
      <img className={stylex(styles.profileImg)} src="/default-profile-picture.jpg" alt="Schedule Profile" />
    </Link>
  );
};

export default ProfileBtn;

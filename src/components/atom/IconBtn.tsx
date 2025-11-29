import BaseBtn from "./BaseBtn";
import stylex from "@stylexjs/stylex";
import type { IconType } from "react-icons";

type IconBtnProps = {
  Icon: IconType;
  action: () => void;
  link?: string;
}

const styles = stylex.create({
  btnIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "var(--subtext)",
    transition: "color 0.2s ease, transform 0.2s ease",
    cursor: "pointer",
    ":hover": {
      color: "var(--text)",
      transform: "scale(1.1)"
    }
  }
});

const IconBtn = (props: IconBtnProps) => {
  return (
    <BaseBtn action={props.action} link={props.link}>
      <props.Icon className={stylex(styles.btnIcon)} />
    </BaseBtn>
  );
};

export default IconBtn;

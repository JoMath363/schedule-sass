import BaseBtn from "./BaseBtn";
import stylex from "@stylexjs/stylex";
import type { IconType } from "react-icons";

type IconBtnProps = {
  action?: () => void;
  link?: string;
  icon: IconType;
}

const styles = stylex.create({
  BtnIcon: {
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
      <props.icon className={stylex(styles.BtnIcon)} />
    </BaseBtn>
  );
};

export default IconBtn;

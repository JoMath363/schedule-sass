import stylex from "@stylexjs/stylex";
import type { IconType } from "react-icons";
import BaseBtn from "./BaseBtn";

type SecondaryBtnProps = {
  link: string,
  icon?: IconType,
  text: string
}

const styles = stylex.create({
  SecondaryBtn: {
    color: "var(--primary)",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    gap: "0.3rem",
    ":hover": {
      color: "var(--primary-dark)"
    }
  }
});

const SecondaryBtn = (props: SecondaryBtnProps) => {
  return (
    <BaseBtn className={stylex(styles.SecondaryBtn)} link={props.link}>
      {props.icon && <props.icon />}{props.text}
    </BaseBtn>
  );
};

export default SecondaryBtn;

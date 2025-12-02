import stylex from "@stylexjs/stylex";
import BaseBtn from "./BaseBtn";
import type { IconType } from "react-icons";

type PrimaryBtnProps = {
  action: () => void,
  icon?: IconType,
  text: string
}

const styles = stylex.create({
  PrimaryBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    background: "var(--primary)",
    padding: "0.6rem 0.8rem",
    color: "#f8f8f8ff",
    borderRadius: "0.3rem",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    ":hover": {
      background: "var(--primary-dark)"
    }
  }
});

const PrimaryBtn = (props: PrimaryBtnProps) => {
  return (
    <BaseBtn className={stylex(styles.PrimaryBtn)} action={() => { }}>
      {props.icon && <props.icon />}{props.text}
    </BaseBtn>
  );
};

export default PrimaryBtn;

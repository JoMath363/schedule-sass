import stylex from "@stylexjs/stylex";
import type { Dispatch } from "react";

type SelectInputProps = {
  options: { label: string; value: string }[];
  input: string;
  setInput: Dispatch<React.SetStateAction<string>>
}

const styles = stylex.create({
  SelectInput: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    background: "Var(--surface)",
    padding: "0.6rem 0.8rem",
    color: "var(--text)",
    border: "solid currentColor 1px",
    fontWeight: "bold",
    borderRadius: "0.3rem",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    ":hover": {
      background: "var(--subtext)",
      color: "white"
    }
  },
  SelectInputOption: {
    background: "var(--subtext)",
    color: "white",
    ":hover": {
      background: "var(--primary-dark)",
    }
  }
});

const SelectInput = (props: SelectInputProps) => {
  return (
    <select
      className={stylex(styles.SelectInput)}
      value={props.input}
      onChange={(e) => props.setInput(e.target.value)}
    >
      {props.options.map((option, i) =>
        <option className={stylex(styles.SelectInputOption)} value={option.value} key={i}>
          {option.label}
        </option>
      )}
    </select>
  );
};

export default SelectInput;

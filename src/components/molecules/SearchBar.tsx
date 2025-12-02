import stylex from "@stylexjs/stylex";
import { useState } from "react";
import { PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";

const styles = stylex.create({
  SearchBar: {
    display: "flex",
    alignItems: "center",
    background: "var(--background)",
    height: "2.4rem",
    width: "400px",
    borderRadius: "2rem",
  },
  SearchBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0.8rem",
    fontSize: "1.4rem",
    color: "var(--subtext)",
    transition: "color 0.2s ease, transform 0.2s ease",
    cursor: "pointer",
    ":hover": {
      color: "var(--text)",
      transform: "scale(1.1)"
    }
  },
  SearchBarInput: {
    width: "100%",
    height: "100%",
    background: "none",
    border: "none",
    outline: "none",
    fontSize: "0.9rem",
  }
});

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <div className={stylex(styles.SearchBar)}>
      <PiMagnifyingGlassBold className={stylex(styles.SearchBtn)} onClick={() => { }} />

      <input
        className={stylex(styles.SearchBarInput)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text" placeholder="Buscar por Nome, CPF,  Telefone..."
      />

      {input && <PiXBold className={stylex(styles.SearchBtn)} onClick={() => setInput("")} />}
    </div>
  );
};

export default SearchBar;

import stylex from "@stylexjs/stylex";
import { PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";

const styles = stylex.create({
  searchBar: {
    display: "flex",
    alignItems: "center",
    background: "var(--background)",
    height: "2.5rem",
    width: "400px",
    padding: "0 0.8rem",
    borderRadius: "2rem",
    gap: "0.5rem"
  },
  searchBtn: {
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
  },
  searchBarInput: {
    width: "100%",
    background: "none",
    border: "none",
    outline: "none"
  },
  searchCleanBtn: {
    display: "none"
  }
});

const SearchBar = () => {
  return (
    <div className={stylex(styles.searchBar)}>
      <PiMagnifyingGlassBold className={stylex(styles.searchBtn)} onClick={() => { }} />

      <input className={stylex(styles.searchBarInput)} type="text" placeholder="Buscar por Nome, CPF,  Telefone..." />

      <PiXBold className={stylex(styles.searchBtn, styles.searchCleanBtn)} onClick={() => { }} />
    </div>
  );
};

export default SearchBar;

import type { ReactNode } from "react";
import Header from "../organisms/Header";
import stylex from "@stylexjs/stylex";

type DefaultPageProps = {
  children: ReactNode
}

const styles = stylex.create({
  Main: {
    height: "calc(100dvh - 3.5rem)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem"
  }
});

const DefaultPage = (props: DefaultPageProps) => {
  return (
    <>
      <Header />
      <main className={stylex(styles.Main)}>
        {props.children}
      </main>
    </>
  );
};

export default DefaultPage;
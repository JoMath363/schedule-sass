import type { ReactNode, CSSProperties } from "react";

type FlexContainerProps = {
  children: ReactNode;
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
};

const FlexContainer = (props: FlexContainerProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.direction || "row",
        justifyContent: props.justify || "start",
        alignItems: props.align || "center",
        gap: props.gap || "1.5rem"
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexContainer;
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export type BaseBtnProps = {
  children: ReactNode;
  action: () => void;
  link?: string;
};

const BaseBtn = (props: BaseBtnProps) => {
  if (props.link)
    return (
      <Link style={{all: "unset"}} to={props.link} onClick={props.action}>
        {props.children}
      </Link>
    );

  return (
    <button style={{all: "unset"}} onClick={props.action}>
      {props.children}
    </button>
  );
};

export default BaseBtn;

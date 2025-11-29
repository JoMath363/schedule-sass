import type { ReactNode } from "react";

/* Components */
import { Link } from "react-router-dom";


export type BaseBtnProps = {
  children: ReactNode;
  action: () => void;
  link?: string;
};

const BaseBtn = (props: BaseBtnProps) => {
  if (props.link)
    return (
      <Link to={props.link} onClick={props.action}>
        {props.children}
      </Link>
    );

  return (
    <button onClick={props.action}>
      {props.children}
    </button>
  );
};

export default BaseBtn;

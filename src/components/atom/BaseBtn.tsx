import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type BaseBtnProps = {
  children: ReactNode;
  className?: string;
  action?: () => void;
  link?: string;
};

const BaseBtn = (props: BaseBtnProps) => {
  if (props.link)
    return (
      <Link className={props.className} to={props.link}>
        {props.children}
      </Link>
    );

  return (
    <button className={props.className} onClick={props.action}>
      {props.children}
    </button>
  );
};

export default BaseBtn;

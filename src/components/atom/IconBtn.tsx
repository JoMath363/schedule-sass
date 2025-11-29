import BaseBtn from "./BaseBtn";
import type { IconType } from "react-icons";

type IconBtnProps = {
  Icon: IconType;
  action: () => void;
  link?: string;
}

const IconBtn = (props: IconBtnProps) => {
  return (
    <>
      <style>{`
        .btn-icon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--subtext);
          transition: 
        }

        .btn-icon:hover {
          color: var(--text);
          
        }
      `}</style>

      <BaseBtn action={props.action} link={props.link}>
        <props.Icon className="btn-icon" />
      </BaseBtn>
    </>
  );
};

export default IconBtn;

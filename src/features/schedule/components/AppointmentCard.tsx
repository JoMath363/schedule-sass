
import stylex from "@stylexjs/stylex";
import { formatTime } from "../../../utils/format";
import { Link } from "react-router-dom";

export type AppointmentCardProps = {
  id: string;
  time: string;
  title: string;
  client: string;
  top?: number;
  left?: number;
};

const styles = stylex.create({
  AppointmentCard: {
    position: "absolute",
    width: "250px",
    padding: "0.5rem",
    border: "solid var(--text) 1px",
    background: "var(--surface)",
    textDecoration: "none",
  }
});

const AppointmentCard = (props: AppointmentCardProps) => {
  const date = new Date(props.time);

  return (
    <Link
      to={`/appointment/${props.id}`}
      className={stylex(styles.AppointmentCard)}
      style={{
        top: `calc(var(--scheduleRowHeight) * ${props.top})`,
        left: `calc(255px * ${props.left})`
      }}
    >
      <p>
        {formatTime(date)}
      </p>
      <h2>
        {props.title}
      </h2>
      <h3>
        {props.client}
      </h3>
    </Link>
  );
};

export default AppointmentCard;

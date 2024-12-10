import { weekdays } from "../../data/weekdays";

export const DayOfTheWeek = (props) => {
  return <div className="div-align-center">{weekdays[props.weekday]}</div>;
};

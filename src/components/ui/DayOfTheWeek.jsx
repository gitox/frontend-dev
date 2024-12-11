import { weekdays } from "../../data/weekdays";

export const DayOfTheWeek = (props) => {
  return <p className="weekday">{weekdays[props.weekday]}</p>;
};

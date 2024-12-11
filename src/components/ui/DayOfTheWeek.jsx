import { weekdays } from "../../data/weekdays";

export const DayOfTheWeek = (props) => {
  return <p>{weekdays[props.weekday]}</p>;
};

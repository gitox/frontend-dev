import { weekdays } from "../../data/weekdays";

export const DayOfTheWeek = ({weekday}) => {
  
  return weekday < 6 && <p className="weekday">
      {weekdays[weekday]}
    </p>;
};

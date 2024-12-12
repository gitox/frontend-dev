import { Card } from "./ui/Card";
import { recipes } from "../data/recipes";
import { DayOfTheWeek } from "./ui/DayOfTheWeek";
import { weekdays } from "../data/weekdays";

export const CardList = ({ onClick }) => {
  const recipes4TheWeek = recipes.slice(0, weekdays.length);

  const mapRecipes = () =>
    recipes4TheWeek.map((recette, index) => (
      <div className="card" onClick={() => onClick(recette)} key={recette.id}>
        <Card recipes={recette} />
        <DayOfTheWeek weekday={index++} />
      </div>
    ));

  return <div className="week-recipe">{mapRecipes()}</div>;
};

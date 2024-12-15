import { Card } from "./ui/Card";
import { recipes } from "../data/recipes";
import { DayOfTheWeek } from "./ui/DayOfTheWeek";
import { weekdays } from "../data/weekdays";

export const CardList = ({ onClick }) => {
  const recipes4TheWeek = recipes.slice(0, weekdays.length);
  
  const mapRecipes = () =>
    recipes4TheWeek.map((recipe, index) => (
      <div id="hello" className="card" onClick={() => onClick(recipe)} key={recipe.id}>
        <Card {...recipe} />
        <DayOfTheWeek weekday={index++} />
      </div>
    ));

  return <div className="week-recipe">{mapRecipes()}</div>;
};

import { Card } from "./ui/Card";
import { recipes } from "../data/recipes";
import { DayOfTheWeek } from "./ui/DayOfTheWeek";

export const CardList = ({ onClick }) => {
  let inc = 0;

  const mapRecipes = () =>
    recipes.map((recette) => (
      <div className="card" onClick={() => onClick(recette)} key={recette.id}>
        <Card recipes={recette} />
        <DayOfTheWeek weekday={inc++} />
      </div>
    ));

  return <div className="week-recipe">{mapRecipes()}</div>;
};

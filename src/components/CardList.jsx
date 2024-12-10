import { Card } from "./ui/Card";
import { recipes } from "../data/recipes";
import { DayOfTheWeek } from "./ui/DayOfTheWeek";

export const CardList = ({ onClick }) => {
  let inc = 0;

  const mapRecipes = () =>
    recipes.map((recette) => (
      <li onClick={() => onClick(recette)} key={recette.id}>
        <Card recipes={recette} />
        <DayOfTheWeek weekday={inc++} />
      </li>
    ));

  return (
    <div className="week-recipe">
      <ul>{mapRecipes()}</ul>
    </div>
  );
};

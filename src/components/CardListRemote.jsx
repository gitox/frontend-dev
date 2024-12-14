// import { recipes } from "../data/recipes";

import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/Card";
import { DayOfTheWeek } from "./ui/DayOfTheWeek";
import { weekdays } from "../data/weekdays";

export const CardListRemote = ({ onClick }) => {
  // const { data, isLoading, isError } = onClick;
  const fetchRecipes = async (query) => {
    const res = await fetch(query);
    return res.json();
  };

  const useQueryRemote = (queryKey, query) => {
    console.log("query", query);

    const promise = useQuery({
      queryKey: [queryKey],
      queryFn: () => fetchRecipes(query),
    });
    // const { data, isLoading, isError } = promise;
    return promise;
  };

  const promise = useQueryRemote("recipes", "https://dummyjson.com/recipes");
  console.log("promise from App", promise);

  const { data, isLoading, isError } = promise;

  // recipes = data.recipes;
  // console.log("recipes from App", recipes);

  if (isLoading) {
    console.log("it's loading");
    return <>it is loading</>;
  }

  const recipes = data.recipes;
  const recipes4TheWeek = recipes.slice(0, weekdays.length);
  console.log("recipes4theweek",recipes4TheWeek)
  const mapRecipes = () =>
    recipes4TheWeek.map((recette, index) => (
      <div className="card" onClick={() => onClick(recette)} key={recette.id}>
        <Card recipes={recette} />
        <DayOfTheWeek weekday={index++} />
      </div>
    ));

  return <div className="week-recipe">{mapRecipes()}</div>;
};

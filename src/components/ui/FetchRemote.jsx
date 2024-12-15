import { isError, useQuery } from "react-query";
// const apiKey = "12de54fa82084048a1272a12c4a60583";

const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const result = await response.json();
  return result;
};

export const FetchRemote = () => {
  const { data, isLoading } = useQuery("recipes", fetchRecipes);

  if (isError) {
    return <>is error...</>;
  }

  if (isLoading) {
    return <>is loading...</>;
  }

  return (
    <div className="App">
      <div>
        {data.recipes.map((recipe) => (
          <p key={recipe.id}>
            {recipe.name} <img width="10%" />
          </p>
        ))}
      </div>
    </div>
  );
};

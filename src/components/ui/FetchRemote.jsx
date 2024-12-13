import { useState } from "react";
import { isError, useQuery } from "react-query";
import { CardList } from "../CardList";
const apiKey = "12de54fa82084048a1272a12c4a60583";

const fetchRecipes = async () => {
    // const res = await fetch("https://dummyjson.com/recipes?sortBy=name&order=asc");
    const res = await fetch("https://dummyjson.com/recipes");
    return res.json();
  };

  export const FetchRemote = () => {
    const { data, isLoading } = useQuery("recispes", fetchRecipes);
    // console.log("data",data.recipes);
    
    // throw new Error("Ben alors, qu'est-ce qui se passe ?")

    if(isError){
        return <>is error...</>
    }

    if(isLoading){
        return <>is loading...</>
        // return <CardList onClick={{}} />;
    }


    return (
      <div className="App">
        <div>
          {data.recipes.map((recipe) => (
            <p key={recipe.id}>
              {recipe.name} <img width="10%" /> {/* src={recipe.image} />*/}
            </p>
          ))}
        </div>
      </div>
    );
  };
import { useState } from "react";
import { VignetteRecette } from "./components/VignetteRecette";
import { recipes } from "./data/recipes";
import { Header } from "./components/Header/Header";
import { CardListRemote } from "./components/CardListRemote";

import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [recipe, setRecipe] = useState(null);
  const majVignetteRecette = (recipe) => setRecipe(recipe);

  // if (recipe === null) {
  //   let presentDay = new Date().getDay();

  //   if (presentDay <= recipes.length) {
  //     // rectifier decalage du dimanche index=0 à lundi index=0
  //     presentDay = presentDay > 0 ? presentDay - 1 : presentDay;
  //     majVignetteRecette(recipes[presentDay]);
  //   }
  // }


  return (
    <>
      <Header />
      <CardListRemote recipes={majVignetteRecette} />
      <VignetteRecette recipe={recipe} />
    </>
  );
}

export default App;

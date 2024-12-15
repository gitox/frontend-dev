import { useState } from "react";
import { VignetteRecette } from "./components/VignetteRecette";

import { CardListRemote } from "./components/CardListRemote";
import { Header } from "./components/Header/Header";

import "./App.css";

function App() {
  const [recipe, setRecipe] = useState(null);
  const majVignetteRecette = (recipe) => setRecipe(recipe);

  console.log("App recipe", recipe);

  return (
    <>
      <Header />
      <CardListRemote onClick={majVignetteRecette} />
      <VignetteRecette recipe={recipe} />
    </>
  );
}

export default App;

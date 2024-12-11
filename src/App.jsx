import { useState } from "react";
import { CardList } from "./components/CardList";
import { VignetteRecette } from "./components/VignetteRecette";

import "./App.css";

function App() {
  const [recipe, setRecipe] = useState({});
  const majVignetteRecette = (recipe) => setRecipe(recipe);

  return (
    <>
      {/* <header>Recette de la semaine</header> */}
      <CardList onClick={majVignetteRecette} />
      <VignetteRecette recipe={recipe} />
    </>
  );
}

export default App;

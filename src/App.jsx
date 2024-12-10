import { useState } from "react";
import { CardList } from "./components/CardList";
import { VignetteRecette } from "./components/VignetteRecette";

import "./App.css";

function App() {
  const [recipe, setRecipe] = useState({});
  const majVignetteRecette = (recipe) => setRecipe(recipe);

  return (
    <div className="container">
      <CardList onClick={majVignetteRecette} />
      <VignetteRecette recipe={recipe} />
    </div>
  );
}

export default App;

import { useState } from "react";
import { CardList } from "./components/CardList";
import { VignetteRecette } from "./components/VignetteRecette";

import "./App.css";
import { getImageUrl } from "./lib/utils/image";
import { recipes } from "./data/recipes";

function App() {
  const [recipe, setRecipe] = useState(null);
  const majVignetteRecette = (recipe) => setRecipe(recipe);
  console.log("recipe", recipe);

  if (recipe === null) {
    let presentDay = new Date().getDay();
    
    if (presentDay <= recipes.length) {
      // rectifier decalage du dimanche index=0 à lundi index=0
      presentDay = presentDay > 0 ? presentDay - 1 : presentDay;
      majVignetteRecette(recipes[presentDay]);
    }
  }

  return (
    <>
      {console.log("present day recipe", recipe)}
      <header>
        {/* <img className="ain-logo" src={getImageUrl('more.png')} height="100px"/>  */}
        <img className="main-logo" src={getImageUrl("AuMenu.png")} />
        {/* <img className="main-logo" src={getImageUrl('calendar.png')} height="100px"/>  */}
        {/* <ul className="main-menu">
          <li>Menu</li>
          <li>Contact</li>
          <li>Autres</li>
        </ul> */}
      </header>
      <CardList onClick={majVignetteRecette} />
      <VignetteRecette recipe={recipe} />
    </>
  );
}

export default App;

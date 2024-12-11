import { useState } from "react";
import { CardList } from "./components/CardList";
import { VignetteRecette } from "./components/VignetteRecette";

import "./App.css";
import { getImageUrl } from "./lib/utils/image";

function App() {
  const [recipe, setRecipe] = useState({});
  const majVignetteRecette = (recipe) => setRecipe(recipe);

  return (
    <>
      <header>
        {/* <img className="ain-logo" src={getImageUrl('more.png')} height="100px"/>  */}
        <img className="main-logo" src={getImageUrl('AuMenu.png')} /> 
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

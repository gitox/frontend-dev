import { recetteDuJour } from "../lib/utils/recipe";

export const VignetteRecette = ({ recipe }) => {
  /* Affiche la recette du jour */
  recipe = recetteDuJour(recipe);

  if (recipe === null || recipe === undefined) {
    return (
      <div className="vignetteRecetteVide">
        Selectionnez la recette du jour !
      </div>
    );
  }

  const { name, image, ingredients, instructions } = recipe;
  // console.log("VignetteRecette", recipe);

  return (
    /* Intitulé et vignette de la recette */
    <div className="vignetteRecette">
      <div className="left">
        <img src={image} alt={name} className="vignetteRecetteImg" />
        <div className="bottom-left">{name}</div>
      </div>

      <div className="right">
        Ingrédients :
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        Etapes :
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

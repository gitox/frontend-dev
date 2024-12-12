export const VignetteRecette = ({ recipe }) => {
  const { nom, image, ingredients, etape } = recipe;

  if (nom === undefined) {
    return (
      <div className="vignetteRecetteVide">
        Selectionnez la recette du jour !
      </div>
    );
  }

  return (
    /* Intitulé et vignette de la recette */
    <div className="vignetteRecette">
      <div className="left">
        <img src={image} alt={nom} className="vignetteRecetteImg" />
        <div className="bottom-left">{nom}</div>
      </div>

      <div className="right">
        Ingrédients :
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient.nom} : {ingredient.quantite} {ingredient.unite}
              </li>
            );
          })}
        </ul>
        Etapes :
        <ol>
          {etape.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

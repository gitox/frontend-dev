export const VignetteRecette = ({ recipe }) => {
  const { nom, image, ingredients, etape } = recipe;

  if (nom === undefined) {
    return <div className="vignetteRecetteVide">Choisissez la recette du jour !</div>;
  }

  return (
    // Intitulé et vignette de la recette
    <div className="vignetteRecette">
      <div className="left">
        <p>{nom}</p>
        <img src={image} className="vignetteRecetteImg" />
      </div>

      {/* Ingrédients */}
      <div className="right">
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient.nom} : {ingredient.quantite} {ingredient.unite}
              </li>
            );
          })}
        </ul>
        {/* etapes */}
        <ol>
          {etape.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

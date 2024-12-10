export const VignetteRecette = ({ recipe }) => {
  const { nom, image, ingredients, etape } = recipe;

  if (nom === undefined) return;

  return (
    <div className="vignetteRecette">
      <div className="left">
        <p>{nom}</p>
        <img src={image} className="vignetteRecetteImg" />
      </div>

      {/* Ingrédients */}
      <div className="right">
        <ol>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient.nom} : {ingredient.quantite} {ingredient.unite}
              </li>
            );
          })}
        </ol>
        {/* etape */}
        <ol>
          {etape.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

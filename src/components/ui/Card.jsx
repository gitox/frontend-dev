import { FeatureList } from "../FeatureList";

export const Card = ( props ) => {
  console.log(props);
  
  const { name, image, prepTimeMinutes, cookTimeMinutes, difficulty } = props.recipes;
  const caracteristiques = [prepTimeMinutes, cookTimeMinutes, difficulty];

  return (
    <>
      <span className="img-card-over">
      </span>
        <img className="img-card" src={image} />
      <div className="platDuJour">{name}</div>

      {/* Préparation/cuisson/difficulté */}
      <FeatureList {...caracteristiques} />
    </>
  );
};

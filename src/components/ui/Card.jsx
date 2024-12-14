import { getImageUrl } from "../../lib/utils/image";
import { FeatureList } from "./FeatureList";

export const Card = ({ recipes }) => {
  const { name, image, prepTimeMinutes, cookTimeMinutes, difficulty } = recipes;
  const caracteristiques = [prepTimeMinutes, cookTimeMinutes, difficulty];

  return (
    <>
      <img className="img-card" src={image} />
      <div className="platDuJour">{name}</div>

      {/* Préparation/cuisson/difficulté */}
      <FeatureList caracteristiques={caracteristiques} />
    </>
  );
};

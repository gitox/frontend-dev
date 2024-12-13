import { getImageUrl } from "../../lib/utils/image";

export const Card = ({ recipes }) => {
  const { name, image, prepTimeMinutes, cookTimeMinutes, difficulty } = recipes;

  return (
    <>
      <img className="img-card" src={image} />
      <div className="platDuJour">{name}</div>

      {/* Préparation/cuisson/difficulté */}
      <ul className="mise-en-oeuvre">
        <li>
          <img
            src={getImageUrl("cooking.png")}
            alt="temps_preparation"
            className="logo"
          />
          {prepTimeMinutes}
        </li>
        <li>
          <img
            src={getImageUrl("oven02.png")}
            alt="temps_cuisson"
            className="logo"
          />
          {cookTimeMinutes}
        </li>
        <li>
          <img
            src={getImageUrl("difficulty.png")}
            alt="difficulte"
            className="logo"
          />
          {difficulty}
        </li>
      </ul>
    </>
  );
};

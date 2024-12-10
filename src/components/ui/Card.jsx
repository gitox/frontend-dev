import { getImageUrl } from "../../lib/utils/image";

export const Card = ({ recipes }) => {
  const { nom, image, temps_preparation, temps_cuisson, difficulte } = recipes;

  const handleClick = () => {};

  return (
    <div className="card">
      {nom}
      <img onClick={handleClick} className="img-card" src={image} />
      <ul>
        <li>
          <img src={getImageUrl("cooking.png")} alt="logo" className="logo" />
          {temps_preparation.substring(0, 2).concat("'")}
        </li>
        <li>
          <img src={getImageUrl("oven.png")} alt="logo" className="logo" />
          {temps_cuisson.substring(0, 2).concat("'")}
        </li>
        <li>
          <img
            src={getImageUrl("difficulty.png")}
            alt="logo"
            className="logo"
          />
          {difficulte}
        </li>
      </ul>
    </div>
  );
};

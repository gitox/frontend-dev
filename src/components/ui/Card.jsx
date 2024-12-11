import { getImageUrl } from "../../lib/utils/image";

export const Card = ({ recipes }) => {
  const { nom, image, temps_preparation, temps_cuisson, difficulte } = recipes;

  return (
    <>
      <img className="img-card" src={image} />
      <div className="platDuJour">{nom} </div>
      
      {/* Préparation/cuisson/difficulté */}
       <ul className="mise-en-oeuvre">
        <li>
          <img src={getImageUrl("cooking.png")} alt="temps_preparation" className="logo" />
          {temps_preparation.substring(0, 2).concat("'")}
        </li>
        <li>
          <img src={getImageUrl("oven02.png")} alt="temps_cuisson" className="logo" />
          {temps_cuisson.substring(0, 2).concat("'")}
        </li>
        <li>
          <img
            src={getImageUrl("difficulty.png")}
            alt="difficulte"
            className="logo"
          />
          
          {difficulte}
        </li>
      </ul>
    </>
  );
};

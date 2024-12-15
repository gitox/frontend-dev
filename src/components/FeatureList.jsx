import { features } from "../data/miseEnOeuvre";
import { Feature } from "./ui/Feature";

export const FeatureList = (caracteristiques) => {
  console.log(caracteristiques);
  
  const map = features.map((feature, index) => (
    <Feature
      key={feature.id}
      feature={feature}
      info={caracteristiques[index]+"'"}
    />
  ));

  return <ul className="mise-en-oeuvre">{map}</ul>;
};

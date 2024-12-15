import { getImageUrl } from "../../lib/utils/image";

export const Feature = ({ feature, info }) => {
  const { src, alt, classe } = feature;

  return (
    <li>
      <img src={getImageUrl(src)} alt={alt} className={classe} />
      {info}
    </li>
  );
};
 
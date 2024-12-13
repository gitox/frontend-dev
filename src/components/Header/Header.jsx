import { getImageUrl } from "../../lib/utils/image";

export const Header = () => {
    const handleClick = () => {
        return null;
    }

  return (
    <header>
      <img
        onClick={handleClick}
        className="main-logo"
        src={getImageUrl("AuMenu.png")}
      />
    </header>
  );
};

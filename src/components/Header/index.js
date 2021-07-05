import { Avatar } from "@material-ui/core";
import { PictureAsPdf } from "@material-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <PictureAsPdf />
        <h2>ZipDrop</h2>
      </div>
      <div className="header__avatar">
        <p>Peter Hu</p>
        <Avatar
          alt="Peter Hu"
          src="https://lh3.googleusercontent.com/a-/AOh14GhyTDanQfUyjp6VV1R3hHumxv_aGFqLuUPVF5zvOg=s288-p-rw-no"
        />
      </div>
    </header>
  );
};

export default Header;

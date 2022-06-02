import FirstNav from "./Nav/FirstNav/FirstNav";
import SecondNav from "./Nav/SecondNav/SecondNav";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Netflix Logo" />
      <FirstNav />
      <SecondNav />
    </div>
  );
};

export default Header;

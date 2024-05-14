import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <h1 className="Nav__item">Find Me Something To Watch</h1>
      <div className="Nav__box">
        <Link className="Nav__item" to="/lists">
          Lists
        </Link>

        <Link className="Nav__item" to="/randomselection">
          Random Selection
        </Link>

        <Link className="Nav__item" to="/">
          Home
        </Link>

        <Link className="Nav__item" to="/addmovie">
          Add Movie
        </Link>
      </div>
    </div>
  );
};

export default Nav;

import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link className="Nav__title" to="/">
        Find Me Something To Watch
      </Link>
      <div className="Nav__box">
        <Link className="Nav__item" to="/lists">
          Lists
        </Link>

        <Link className="Nav__item" to="/randomselection">
          Random Selection
        </Link>

        <Link className="Nav__item" to="/allmovies">
          All Movies
        </Link>

        <Link className="Nav__item" to="/addmovie">
          Add Movie
        </Link>
      </div>
    </div>
  );
};

export default Nav;

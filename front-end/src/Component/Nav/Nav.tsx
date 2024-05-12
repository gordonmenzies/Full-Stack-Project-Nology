import "./Nav.scss";

const Nav = () => {
  return (
    <div className="Nav">
      <h1 className="Nav__item">Find Me Something To Watch</h1>
      <div className="Nav__box">
        <h1 className="Nav__item">Lists</h1>
        <h1 className="Nav__item">Random Selection</h1>
        <h1 className="Nav__item">Things To Think About</h1>
      </div>
    </div>
  );
};

export default Nav;

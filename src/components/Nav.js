import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <ul>
          <li>
            <AnchorLink className="btn-style" href="#menu">
              Menu
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="btn-style" href="#informations">
              Informations
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="btn-reservation">
        <AnchorLink href="#reservation">Reservation</AnchorLink>
      </div>
    </div>
  );
};

export default Nav;

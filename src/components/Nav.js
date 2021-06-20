import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  useEffect(() => {
    const navbar = document.querySelector(".header");
    const sticky = navbar.offsetTop;
    const eventSticky = window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky + navbar.clientHeight * 4) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
    return window.removeEventListener("scroll", eventSticky);
  }, []);
  return (
    <div className="header">
      <div className="nav-container layout">
        <div className="nav-wrapper">
          <ul>
            <li>
              <AnchorLink offset="69" className="btn-style" href="#menu">
                Menu
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="69"
                className="btn-style"
                href="#informations"
              >
                Informations
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="btn-reservation">
          <AnchorLink offset="69" href="#reservation">
            Reservation
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;

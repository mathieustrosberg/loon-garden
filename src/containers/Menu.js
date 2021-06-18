import icon_entrees from "../assets/images/icon_entrees.png";
import icon_plats from "../assets/images/icon_plats.png";
import icon_boissons from "../assets/images/icon_boissons.png";
import icon_desserts from "../assets/images/icon_desserts.png";
import icon_menu from "../assets/images/icon_menu.png";

import entrees from "../data/entrees.json";
import desserts from "../data/desserts.json";
import plats from "../data/plats.json";
import menu from "../data/menu.json";
import boissons from "../data/boissons.json";
import DataMenu from "../components/DataMenu";
import { useState } from "react";

const Menu = () => {
  const [data, setData] = useState(entrees);
  const [activeMenu, setActiveMenu] = useState("Entrees");
  const toggleMenu = (param) => {
    setData(param);
  };
  return (
    <div id="menu">
      <h1>Menu</h1>
      <div className="buttons-wrapper">
        <div
          className="button-menu"
          onClick={() => {
            toggleMenu(entrees);
            setActiveMenu("Entrees");
          }}
        >
          <img className="icon-menu" alt="entrées" src={icon_entrees} />
          <button className={activeMenu === "Entrees" ? " active" : ""}>
            Entrées
          </button>
        </div>
        <div
          className="button-menu"
          onClick={() => {
            toggleMenu(plats);
            setActiveMenu("Plats");
          }}
        >
          <img className="icon-menu" alt="plats" src={icon_plats} />
          <button className={activeMenu === "Plats" ? " active" : ""}>
            Plats
          </button>
        </div>

        <div
          className="button-menu"
          onClick={() => {
            toggleMenu(desserts);
            setActiveMenu("Desserts");
          }}
        >
          <img className="icon-menu" alt="desserts" src={icon_desserts} />
          <button className={activeMenu === "Desserts" ? " active" : ""}>
            Desserts
          </button>
        </div>
        <div
          className="button-menu"
          onClick={() => {
            toggleMenu(boissons);
            setActiveMenu("Boissons");
          }}
        >
          <img className="icon-menu" alt="boissons" src={icon_boissons} />
          <button className={activeMenu === "Boissons" ? " active" : ""}>
            Boissons
          </button>
        </div>
        <div
          className="button-menu"
          onClick={() => {
            toggleMenu(menu);
            setActiveMenu("Menu");
          }}
        >
          <img className="icon-menu" alt="menu" src={icon_menu} />
          <button className={activeMenu === "Menu" ? " active" : ""}>
            Menus
          </button>
        </div>
      </div>

      <div className="background-menu">
        <DataMenu data={data} />
      </div>
    </div>
  );
};

export default Menu;

import { useState } from "react";

import "./Header.scss";

const Header = () => {
  const [modal, setModal] = useState(false);

  const handleDropDownMenu = () => {
    if (modal === false) {
      console.log("changeeee open");
      setModal(true);
    } else {
      console.log("changeeee close");
      setModal(false);
    }
  };

  return (
    <div className="header-main-container">
      <div className="main-div-uno">
        <img
          className="logo-div"
          src="../../../resources/netflix-logo.png"
          alt="logo-img"
        />
        {modal ? (
          <div>
            <div className="menu" onClick={handleDropDownMenu}>
              Menu
              <i className="fas fa-caret-down"></i>
            </div>
            <ul className="ul-div-drop">
              <li className="li-item-drop" href="">
                <a className="text-menu" href="">
                  Inicio
                </a>
              </li>
              <li className="li-item-drop" href="">
                <a className="text-menu" href="">
                  Series TV
                </a>
              </li>
              <li className="li-item-drop" href="">
                <a className="text-menu" href="">
                  Películas
                </a>
              </li>
              <li className="li-item-drop" href="">
                <a className="text-menu" href="">
                  Novedades más vistas
                </a>
              </li>
              <li className="li-item-drop" href="">
                <a className="text-menu" href="">
                  Mi lista
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <div className="menu" onClick={handleDropDownMenu}>
              Menu
              <i className="fas fa-caret-down"></i>
            </div>
            <ul className="ul-div">
              <li className="li-item" href="">
                <a className="text-menu" href="">
                  Inicio
                </a>
              </li>
              <li className="li-item" href="">
                <a className="text-menu" href="">
                  Series TV
                </a>
              </li>
              <li className="li-item" href="">
                <a className="text-menu" href="">
                  Películas
                </a>
              </li>
              <li className="li-item" href="">
                <a className="text-menu" href="">
                  Novedades más vistas
                </a>
              </li>
              <li className="li-item" href="">
                <a className="text-menu" href="">
                  Mi lista
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="main-div-dos">
        <a className="icon-container" href="">
          <i className="fas fa-search"></i>
        </a>
        <a className="icon-container" href="">
          <i className="fas fa-gift"></i>
        </a>
        <a className="icon-container" href="">
          <i className="fas fa-bell"></i>
        </a>
        <a className="icon-container" href="">
          <img
            className="avatar-div"
            src="../../../resources/netflix-avatar.png"
            alt="avatar-img"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;

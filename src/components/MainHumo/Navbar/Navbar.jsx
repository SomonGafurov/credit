import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./burger.css";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [divHeight, setDivHeight] = useState(10);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setDivHeight(divHeight === 10 ? 100 : 10);
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
    setDivHeight(divHeight === 100 ? 10 : 100);
  };

  return (
    <div width="100%" style={{ height: `${divHeight}vh` }}>
      <nav>
        <Link to="/">
          <img src="/logo_ru.png" alt="" className="logotip" />
        </Link>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>
      <div className={menuClass}>
        <Link to="/Onas" className="link">
          О нас
        </Link>
        <br />
        <Link to="/Private" className="link">
          Частным <br /> лицам
        </Link>
        <br />
        <Link to="/Legal" className="link">
          Юридическим <br /> лицам
        </Link>
        <br />
        <Link className="link">+992 (44) 6405544</Link>
        <br />
        <Link to="/credits" className="link">
          Кредиты
        </Link>
        <br />
        <Link to="/Cards" className="link">
          Заказать карту Visa
        </Link>
        <Link to="/deposits" className="link">
          Депозитный калькулятор
        </Link>
        <Link to="/creditapplication" className="link">
          Заявка на кредит
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

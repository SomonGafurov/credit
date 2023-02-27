import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="foot">
      <h1 className="nash">Наши партнёры</h1>
      <div className="links-3">
        <Link to="/mainhumo" className="foot-1">
          <img src="/logo_ru.png" alt="" className="photo-1" />
        </Link>
        <div className="appstore">
          <Link to="/https://www.apple.com/app-store">
            <img src="/appstore.png" alt="" />
          </Link>
          <Link to="/https://play.google.com">
            <img src="/google-play.png" alt="" className="apple" />
          </Link>
        </div>

        <div className="foot-2">
          <div>
            <p className="text-3">
              Скачайте наше приложение, чтобы <br /> следить за вашими
              финансами. Это <br /> удобно и безопасно!
            </p>
          </div>
          <div className="links-2">
            <p>
              <Link to="/" className="links">
                О Хумо
              </Link>
            </p>
            <p>
              <Link to="/mainhumo" className="links">
                Филиальная сеть
              </Link>
            </p>
            <p>
              <Link to="/mainhumo" className="links">
                Вакансии
              </Link>
            </p>
            <p>
              <Link to="/mainhumo" className="links">
                Хумо онлайн
              </Link>
            </p>
            <Link to="/mainhumo" className="links">
              Способы пополнения
            </Link>
            <p>
              <Link to="/mainhumo" className="links">
                Наши контакты
              </Link>
            </p>
          </div>
          <div className="icons-2">
            <p>
              <BsTelephoneOutbound className="icons" />
              <AiOutlineInstagram className="icons" />
              <BsTelegram className="icons" />
              <BsWhatsapp className="icons" />
            </p>
            <p className="text-phone">+992 88 777 55 44</p>
            <p>
              <BsEnvelope className="icons" />
            </p>
            <p>
              <Link to="/">
                <BsTelephoneOutbound className="icons" />
              </Link>
              <Link to="/">
                <AiOutlineInstagram className="icons" />
              </Link>
              <Link to="/">
                <BsTelegram className="icons" />
              </Link>
              <Link to="/">
                <BsWhatsapp className="icons" />
              </Link>
              <Link to="/">
                <BsWhatsapp className="icons" />
              </Link>
            </p>
          </div>
          <div className="icons-2">
            <p className="text">
              Республика Таджикистан, <br />
              734061, г. Душанбе, ул. Н. Карабаева, <br /> 148/1. <br />
              Контакт центр: +992 (44) 640-55-44 <br /> или 544
            </p>
            <p className="text">
              © 2023 ЗАО МДО «Хумо» <br /> Лицензия НБТ №0000077 от 24 мая{" "}
              <br /> 2017 г.
            </p>
          </div>
        </div>
      </div>
      <div className="design">
        <h5 className="somon">
          Сайт разработал <br /> <span>Somon Gafurov</span>
        </h5>
      </div>
    </div>
  );
}

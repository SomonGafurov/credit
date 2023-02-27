import React from "react";
import { Link } from "react-router-dom";
import "./news.css";

export default function News() {
  return (
    <div className="news">
      <h2 className="news-text"> Новости</h2>
      <div className="news-card">
        <img src="./posol.jpg" alt="" className="posol" />
        <Link
          to="/ https://humo.tj/ru/about/service/news/vizit-chrezvychaynogo-i-polnomochnogo-posla-yaponii-v-zao-mdo-khumo/"
          className="Link-news"
        >
          {" "}
          <p> подробнее</p>
        </Link>
      </div>
      <div className="news-card">
        <img src="./staff.png" alt="" className="posol" />
        <Link
          to="/ https://humo.tj/ru/about/service/news/podpisanie-soglasheniya-po-proektu-geff/"
          className="Link-news"
        >
          <p> подробнее</p>
        </Link>
      </div>
      <div className="news-card">
        <img src="./agreement.png" alt="" className="posol" />
        <Link
          to="/ https://humo.tj/ru/about/service/news/programma-finansirovaniya-tsepochki-dobavlennoy-stoimosti-v-agrosektore/"
          className="Link-news"
        >
          <p> подробнее </p>
        </Link>{" "}
      </div>
    </div>
  );
}

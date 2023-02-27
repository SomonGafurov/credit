import React from "react";
import "./Onas.css";
import { Link } from "react-router-dom";

const Private = () => {
  return (
    <div className="onas">
      <div className="private">
        <h5> Кредиты</h5>
        <Link>
          Льготные условия <br /> погашения кредита
        </Link>
        <Link>
          Кредит на <br /> животноводство
        </Link>
        <Link>
          Потребительский <br /> кредит
        </Link>
        <Link>
          Сельскохозяйственный <br /> кредит
        </Link>
        <Link>Ипотека</Link>
        <Link>Кредит «Тахсил»</Link>
        <Link>Старт Бизнес</Link>
        <Link>Акция Новогодняя</Link>
      </div>
      <div className="private">
        <h5> Депозиты</h5>
        <Link>
          Вклад «Кафолат <br /> и даромад»
        </Link>
        <Link> Вклад «Сарчашма»</Link>
        <Link>Стархование вкладов</Link>
        <Link>
          Депозит <br />
          “Конунигардонии маблаг”
        </Link>
      </div>
      <div className="private">
        <h5>Денежные переводы</h5>
        <Link>Хумо Переводы</Link>
        <Link>«Контакт»</Link>
        <Link>«ЮНИСТРИМ»</Link>
        <Link> Диёри Хумо</Link>
        <Link>«Тинькофф»</Link>
      </div>
      <div className="private">
        <h5>Банковские карты</h5>
        <Link>«Лахза» (с «МегаФон Таджикистан»)</Link>
        <Link>Карты Visa Хумо</Link>
        <Link>Онлайн</Link>
        <Link>Сервис</Link>
        <Link>Филиальная сеть</Link>
        <Link>Документы </Link>
        <Link>Способы пополнения</Link>
        <Link>
          Адреса <br />
          банкоматов
        </Link>
        <Link></Link>
      </div>
    </div>
  );
};

export default Private;

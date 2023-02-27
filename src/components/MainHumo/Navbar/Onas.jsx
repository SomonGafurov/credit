import React from "react";
import { Link } from "@mui/material";
import "./Onas.css";

const Onas = () => {
  return (
    <div className="onas">
      <div className="private">
        <h5 className="onas-1">
          Информация Слово <br /> генерального директора
        </h5>
        <Link>Наблюдательный совет</Link>
        <Link>Документы и отчетность</Link>
        <Link>Наши показатели</Link> <Link>Достижения</Link>{" "}
        <Link>Состав правления</Link> <Link>Структура собственников</Link>
        <Link> Оргструктура</Link> <Link>Список связанных лиц</Link>{" "}
        <Link>Баланс ОПУ и пруденциальные нормы</Link>
      </div>
      <div className="private">
        <h5 className="onas-1">Сервис</h5> <Link>Информация о Хумо</Link>{" "}
        <Link>Филиальная сеть</Link> <Link>Новости</Link>{" "}
        <Link>Сертификаты и награды</Link> <Link>Обзор прессы </Link>
        <Link>Вакансии</Link>
        <Link>Контакты</Link>
      </div>
      <div className="private">
        <h5 className="onas-1">Жизнь в Хумо </h5> <Link></Link>
        <Link>Истории успехов клиентов</Link>
        <Link>
          Достижения наших <br /> сотрудников
        </Link>
        <Link>Благотворительность</Link>
        <Link>Спорт</Link>
        <Link>Галерея</Link>
        <Link>
          Возможности <br />
          для волонтеров
        </Link>
        <Link>
          График приема <br /> граждан
        </Link>
      </div>
      <div className="private">
        <h5 className="onas-1">Проекты</h5>
        <Link>GEFF Таджикистан</Link>
        <Link>Kiva</Link>
        <Link>Microworld</Link>
        <Link>ADB</Link>
        <Link>CAMP4ASB</Link>
      </div>
      <div className="private">
        <h5 className="onas-1">Партнерам</h5>
        <Link>Рейтинги</Link>
        <Link>
          Информация для <br /> инвесторов
        </Link>
        <Link>Тендеры</Link>
      </div>
    </div>
  );
};

export default Onas;

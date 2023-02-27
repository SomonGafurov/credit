import React from "react";
import { Link } from "react-router-dom";
import "./Onas.css";

export const Legal = () => {
  return (
    <div className="onas">
      <div className="private">
        <h5>Кредиты</h5>
        <Link>
          Льготный период <br /> погашения кредита
        </Link>
        <Link>Бизнес br кредит</Link>
        <Link>
          Сельскохозяйственный <br /> кредит хозяйства
        </Link>
        <Link> Агролизинг</Link>
        <Link>
          Коммерциализация <br /> сельского
        </Link>
      </div>
      <div className="private">
        <h5> Депозиты </h5>
        <Link> Вклад «Срочный»</Link>
      </div>
      <div className="private">
        <h5>Сервис</h5>
        <Link>Филиальная сеть</Link>
      </div>
      <div className="private">
        <h5>Способы пополнения</h5>
        <Link>
          Расчетно-кассовое <br />
          обслуживание Тарифы
        </Link>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./Credits.css";
import "./credCalc.css";
import CreditCalculator from "./CreditCalculator";

const Education = () => {
  return (
    <div>
      <img src="/education-1.jpg" alt="" className="agro" />

      <p className="animal-text"> Таҳсил</p>
      <div className="text-agro-ed">
        <h2 className="text-cred-1"> Таҳсил</h2>
        <h5 className="text-cred">Валюта кредита: сомони и доллары США.</h5>
        <h5 className="text-cred">Сумма кредита:</h5>
        <p> от 500 до 20 000 сомони;</p>
        <p> от 100 до 2 000 долларов США.</p>
        <h5 className="text-cred">
          Продолжительность займа: от 3 до 12 месяцев.
        </h5>
        <h5 className="text-cred"> Льготный период: до 6 месяцев.</h5>
        <h5 className="text-cred">Условия кредитования:</h5>
        <p>Физические лица старше 20 лет и юридические лица;</p>
        <p>Опыт работы не менее 6 месяцев;</p>
        <p>
          Соответствие бизнеса законодательству РТ либо справка о заработной
          плате для бюджетных и коммерческих организаций;
        </p>
        <p>Отсутствие обязательств перед третьими лицами;</p>
        Наличие залогового обеспечения.
        <h5 className="text-cred">Необходимые документы:</h5>
        <p>Кредитная заявка;</p>
        <p>
          Паспорт гражданина Республики Таджикистан, подтверждающий место
          жительства;
        </p>
        <p> ИНН;</p>
        <p>
          Свидетельство о государственной регистрации индивидуального
          предпринимателя, лицензия и/или патент для предпринимателей или
          справка о <br /> зарплате для работника бюджетной или коммерческой
          сферы.
        </p>
      </div>
      <CreditCalculator />
    </div>
  );
};

export default Education;

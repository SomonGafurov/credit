import React from "react";
import { Link } from "react-router-dom";

const Credits = () => {
  return (
    <div className="credit-t">
      <Link to="/creditcalcagro" className="credit-f">
        Кредит на Животноводство
      </Link>
      <Link to="/agri" className="credit-ag">
        Сельскохозяйственный кредит
      </Link>
      <Link to="/education" className="credit-ed">
        Кредит "Таҳсил"
      </Link>
      <Link to="/bussiness" className="credit-b">
        Старт Бизнес
      </Link>
      <Link to="/mortage" className="credit-m">
        Ипотека
      </Link>
      <Link to="/potrcred" className="credit-p">
        Потребительский кредит
      </Link>
    </div>
  );
};
export default Credits;

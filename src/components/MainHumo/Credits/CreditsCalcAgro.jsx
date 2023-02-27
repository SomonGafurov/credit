import React, { useState } from "react";
import "./Credits.css";
import CreditCalculator from "./CreditCalculator";
import "./credCalc.css";

const CreditsCalcAgro = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [Add, setAdd] = useState("");

  const calcSum = (e) => {
    e.preventDefault();
    console.log(e);

    if (num1 === 0 || num2 === 0 || num3 === 0) {
      alert("please enter a valid weight and height");
    } else {
      let Add = (parseInt(num1) * parseInt(num2) * parseInt(num3)) / 100;
      console.log(typeof Add);
      setAdd(parseInt(Add));
    }
  };

  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();

    // localStorage.setItem("creditCalc", JSON.stringify(creditCalc));
    // window.location.reload(true);
  };
  return (
    <div>
      <img src="/animal.jpg" alt="" className="agro" />

      <p className="animal-text">
        Кредит на <br /> Животноводство
      </p>
      <div className="text-agro-a">
        <h2 className="text-cred-1"> Кредит на Животноводство</h2>
        <p>
          Кредит на разведение домашнего скота помогает заёмщикам с капиталом на
          разведение домашнего скота с сопутствующими ветеринарными услугами.
          Кредит <br /> выдаётся на таких животных, как: козы, овцы, домашняя
          птица, коровы и кролики.
        </p>
        <h5 className="text-cred">
          Методология кредитования: индивидуальное и групповое;
        </h5>
        <h5 className="text-cred"> Гарантия:</h5>
        <p>-для индивидуального лица:движимое и недвижимое имущество; </p>
        <p>-для группы: групповая солидарность.</p>
        <h5 className="text-cred">Сумма:</h5>
        <p>- от 800 до 80 000 сомони для индивидуального лица;</p>
        <p>-от 150 до 8 000 сомони на каждого члена группы.</p>
        <h5 className="text-cred">
          Продолжительность займа: от 3 до 36 месяцев.
        </h5>
        <h5 className="text-cred">
          - Условия кредитования для индивидуального лица и для каждого члена
          группы:
        </h5>
        <p>- Физические лица старше 20 лет;</p>
        <p>- Опыт работы в данной сфере не менее 6 месяцев;</p>
        <p>- Соответствие бизнеса законодательству РТ;</p>
        <p>- Отсутствие обязательств перед третьими лицами;</p>
        <p>- Бизнес должен быть прибыльным.</p>
        <h5>Условия кредитования для группы:</h5>
        <p>Количество заемщиков группы от 2 до 10 человек;</p>
        <p> Заемщики должны иметь действующий паспорт РТ;</p>
        <p>Группа принимает принципы группового поручительства.</p>
        <h5 className="text-cred">Необходимые документы:</h5>
        <p>Кредитная заявка;</p>
        <p>
          Паспорт гражданина Республики Таджикистан, подтверждающий место
          жительства;
        </p>
        <p> ИНН;</p>
        <p>Если бизнес зарегистрирован, наличие патента или лицензии. </p>
      </div>
      <CreditCalculator />
    </div>
  );
};

export default CreditsCalcAgro;

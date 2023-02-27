import React, { useState } from "react";
import "./deposit.css";

function DepositCalculator() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0.05);
  const [duration, setDuration] = useState(1);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function calculateDeposit() {
    const interest = depositAmount * interestRate * duration;
    const total = depositAmount + interest;
    setTotalInterest(interest);
    setTotalAmount(total);
  }

  function handleDepositChange(event) {
    setDepositAmount(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <div>
      <div className="text-deposit">
        <h1 className="text-cred">Вклад «Кафолат ва даромад»</h1>
        1. Необходимые документы для открытия вклада – Паспорт РТ ИНН и <br />{" "}
        заявление на открытие счета; 2. Минимальная сумма для открытия вклада
        100 сомони <br /> (17% годовых); 3. Получайте выплаты по вкладу каждый
        месяц; 4. Бесплатно выпускаем для вас пластиковую карту <br /> для
        получения выплат по вкладу; 5. Пополнения основной суммы вклада не
        предусмотрено; 6. При досрочном расторжении договора проценты <br />{" "}
        пересчитываются исходя из 2% годовых, 7. Устанавливаем мобильный банкинг
        - все счета <br /> у вас в смартфоне. C 2013 года ЗАО МДО “Хумо”
        является членом Фонда страхования <br /> сбережений физических лиц. Ваши
        вклады будут застрахованы в соответствии с <br /> Законом Республики
        Таджикистан «О страховании вкладов физических лиц». Более подробная
        информация на сайте www.idif.tj
      </div>
      <div className="credCalc-1">
        <h2 className="text-cred">Депозитный калькулятор</h2>
        <div>
          <label>Сумма вклада:</label>
          <input
            className="input-calc"
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
          />
        </div>
        <div>
          <label>Процентная ставка:</label>
          <select
            className="input-calc"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          >
            <option value="0.05">5%</option>
            <option value="0.06">6%</option>
            <option value="0.07">7%</option>
            <option value="0.08">8%</option>
          </select>
        </div>
        <div>
          <label>Срок вклада (лет):</label>
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
            className="input-calc"
          />
        </div>
        <button onClick={calculateDeposit} className="btn-calc">
          Рассчитать
        </button>
        <div>
          <label className="input-calc">Сумма процентов:</label>
          <span>{totalInterest.toFixed(2)} руб.</span>
        </div>
        <div>
          <label className="input-calc">Итоговая сумма:</label>
          <span className="input-calc">{totalAmount.toFixed(2)} руб.</span>
        </div>
      </div>
    </div>
  );
}

export default DepositCalculator;

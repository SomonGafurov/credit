import React, { useState } from "react";

function CreditApplication() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0);
  const [approved, setApproved] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (salary >= 3000) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }

  return (
    <div className="credCalc-1">
      <h2>Заявка на кредит</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ФИО:</label>
          <input
            className="input-calc"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Зарплата:</label>
          <input
            className="input-calc"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div>
          <label>Сумма кредита:</label>
          <input
            className="input-calc"
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-calc">
          Отправить заявку
        </button>
      </form>
      {approved ? (
        <p>Ваша заявка на кредит одобрена!</p>
      ) : (
        <p>
          К сожалению, мы не можем одобрить вашу заявку на кредит, так как ваша
          зарплата ниже 3000.
        </p>
      )}
    </div>
  );
}

export default CreditApplication;

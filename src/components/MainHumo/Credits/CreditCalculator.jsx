import React, { useState } from "react";

function CreditCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateMonthlyPayment() {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const discountFactor =
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) /
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
    const monthlyPayment = loanAmount / discountFactor;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  }

  function handleLoanAmountChange(event) {
    setLoanAmount(event.target.value);
  }

  function handleLoanTermChange(event) {
    setLoanTerm(event.target.value);
  }

  function handleInterestRateChange(event) {
    setInterestRate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculateMonthlyPayment();
  }

  return (
    <div className="credCalc">
      <h2>Кредитный калькулятор</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Сумма кредита:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            className="input-calc"
          />
        </div>
        <div>
          <label>Срок кредита (в месяцах):</label>
          <input
            className="input-calc"
            type="number"
            value={loanTerm}
            onChange={handleLoanTermChange}
          />
        </div>
        <div>
          <label>Процентная ставка (%):</label>
          <input
            className="input-calc"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </div>
        <button type="submit" className="btn-calc">
          Рассчитать
        </button>
      </form>
      {monthlyPayment > 0 && <p>Ежемесячный платеж: {monthlyPayment} руб.</p>}
    </div>
  );
}

export default CreditCalculator;

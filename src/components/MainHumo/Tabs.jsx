import "./Tabs.css";
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=bKBarawvZd8BcN651OvyBmph7KnCTjAD"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  return (
    <div className="tab-container">
      <img src="./kurs.png" alt="" />
      <div className="Tab-bloc">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Курс валюты
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Конвертер валют
        </button>
      </div>
      <div className="tab-content">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="nbt">
            <h5 className="kurs">Хумо</h5>

            <h5 className="kurs"> НБТ</h5>
          </div>
          <div className="nbt">
            <p className="kurs-1">
              курс на 06.02.2023 <br /> покупка продажа
            </p>
            <p className="kurs-1">
              курс на 06.02.2023 <br /> покупка продажа
            </p>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {" "}
          <h1 className="kurs">Курс Валюты</h1>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </div>
    </div>
  );
}
export default Tab;

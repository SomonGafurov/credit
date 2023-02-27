import PropTypes from "prop-types";
import "./CurrencyInput.css";

function CurrencyInput(props) {
  return (
    <div className="currency">
      <div>
        <input
          type="text"
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
          className="currency-input"
        />
        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
          className="currency-sel"
        >
          {props.currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;

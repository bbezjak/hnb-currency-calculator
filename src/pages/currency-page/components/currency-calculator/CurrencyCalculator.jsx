import React, { useEffect, useState, useMemo } from "react";
import NumberFormat from "react-number-format";
import { PropTypes } from "prop-types";
import { useCurrenciesState } from "./hooks/useCurrenciesState";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";

import { CurrencyMenu } from "./components";

// https://github.com/s-yadav/react-number-format

export const CurrencyCalculator = (props) => {
  const { currencies } = props;
  const [value, setValue] = useState(undefined);
  const [calculatedValue, setCalculatedValue] = useState();
  const [
    currencyPair,
    switchCurrencyPair,
    setForeignCurrency,
    isHomeFirst
  ] = useCurrenciesState(currencies[0].valuta);
  
  useEffect(() => {
    const pom = value;
    setValue(calculatedValue);
    setCalculatedValue(pom);
}, [isHomeFirst])

  const transformed = useMemo(() => {
    let transformed = [];
    currencies.map((currency) => transformed.push(currency.valuta));
    return transformed
  }, [currencies]);

  const coeficient = useMemo(() => {
    if(currencyPair.first === "HRK") {
        const srednji = currencies.find(c => c.valuta === currencyPair.second).srednji;
        return srednji;
    } else {
        const srednji = currencies.find(c => c.valuta === currencyPair.first).srednji;
        return 1.0 / srednji;
    }
  }, [currencies, currencyPair]);

  useEffect(() => {
    calculateValue(value)
}, [coeficient])

  const calculateValue = (value) => {
    debugger;
    let calculatedValue = "";
    if(value !== undefined ) {
        calculatedValue = (value * coeficient).toFixed(2);
    }
    setCalculatedValue(calculatedValue);
  };

  function calculateValue2(event) {
    const value = event.target.value;
    setCalculatedValue(value);
  }

  return (
    <div>
      <h3>Tečajni kalkulator</h3>
      <NumberFormat
      value={value}
        onValueChange={(values) =>{
            const {formattedValue, value, floatValue} = values;
            setValue(floatValue);
            calculateValue(floatValue)
        } }
        thousandSeparator={true}
        isNumericString = {true}
      />
      {/*<NumberFormat onChange={calculateValue2} thousandSeparator={true} */}
      {isHomeFirst ? (
        <span>HRK</span>
      ) : (
        <CurrencyMenu
          currencies = {transformed}
          selectedCurrency = {currencyPair.first}
          chooseCurrency={setForeignCurrency}
        />
      )}
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={switchCurrencyPair}
      >
        <ArrowForwardIcon />
      </Button>
      {isHomeFirst ? (
        <CurrencyMenu
          currencies = {transformed}
          selectedCurrency = {currencyPair.second}
          chooseCurrency={setForeignCurrency}
        />
      ) : (
        <span>HRK</span>
      )}
      <NumberFormat
        value={calculatedValue}
        displayType={"text"}
        thousandSeparator={true}
        isNumericString = {true}
      />
    </div>
  );
};

CurrencyCalculator.propTypes = {
  currencies: PropTypes.array.isRequired,
};

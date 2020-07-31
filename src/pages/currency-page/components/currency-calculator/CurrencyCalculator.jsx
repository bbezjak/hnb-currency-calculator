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
  const [map, setMap] = useState();
  const [calculatedValue, setCalculatedValue] = useState();
  const [
    currencyPair,
    switchCurrencyPair,
    setForeignCurrency,
    isHomeFirst,
  ] = useCurrenciesState(currencies[0].valuta);

  useEffect(() => {
    const map = new Map();
    currencies.map((currency) =>
      map.set(currency.valuta, currency.srednji_tecaj)
    );
    setMap(map);
  }, [currencies]);

  const coeficient = useMemo(() => {
    return currencyPair.first / currencyPair.second;
  }, [currencyPair]);

  const transformed = useMemo(() => {
    let transformed = [];
    currencies.map((currency) => transformed.push(currency.valuta));
    return transformed
  }, [currencies]);

  const calculateValue = (event) => {
    const value = event.target.value;
    setCalculatedValue(value);
  };

  function calculateValue2(event) {
    const value = event.target.value;
    setCalculatedValue(value);
  }

  return (
    <div>
      <h3>Tečajni kalkulator</h3>
      <NumberFormat
        onChange={(event) => calculateValue(event)}
        thousandSeparator={true}
      />
      {/*<NumberFormat onChange={calculateValue2} thousandSeparator={true} */}
      {isHomeFirst ? (
        <span>HRK</span>
      ) : (
        <CurrencyMenu
          currencies = {transformed}
          selectedCurrency = {currencyPair.second}
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
      />
    </div>
  );
};

CurrencyCalculator.propTypes = {
  currencies: PropTypes.array.isRequired,
};

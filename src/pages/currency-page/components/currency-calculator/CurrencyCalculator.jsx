import React, { useEffect, useState, useMemo } from "react";
import NumberFormat from "react-number-format";
import { PropTypes } from "prop-types";
import { CurrencyChooserToggler } from "./components/";
import { useCurrenciesState } from "./hooks/useCurrenciesState";

// https://github.com/s-yadav/react-number-format

export const CurrencyCalculator = (props) => {
  const { currencies } = props;
  const [map, setMap] = useState();
  const [calculatedValue, setCalculatedValue] = useState();
  const [
    currencyPair,
    switchCurrencyPair,
    setForeignCurrency,
  ] = useCurrenciesState(undefined);

  const coeficient = useMemo(() => {
    return currencyPair.first / currencyPair.second;
  }, [currencyPair]);

  useEffect(() => {
    const map = new Map();
    currencies.map((currency) =>
      map.set(currency.valuta, currency.srednji_tecaj)
    );
    setMap(map);
  }, [currencies]);

  const calculateValue = (event) => {
    const value = event.target.value
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
      <CurrencyChooserToggler
        currencies={currencies}
        toggleCurrency={() => switchCurrencyPair()}
        switchCurrencyPair={() => setForeignCurrency()}
      />
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

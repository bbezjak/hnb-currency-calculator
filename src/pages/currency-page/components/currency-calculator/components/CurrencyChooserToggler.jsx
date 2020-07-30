import React, { useState, useEffect } from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";

import { PropTypes } from "prop-types";
import { CurrencyMenu } from "./CurrencyMenu";

export const CurrencyChooserToggler = (props) => {
  const {
    currencies: currenciesFullData,
    chooseCurrency,
    toggleCurrency,
  } = props;

  const [firstHRK, setFirstHRK] = useState(true); 
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    let mappedData = [];
    currenciesFullData.map((currency, index) => {
      mappedData.push(currency.valuta);
    });
    setCurrencies(mappedData);
  }, []);

  function toggle() {
    setFirstHRK(!firstHRK)
    toggleCurrency()
  }

  function chooseForeignCurency(foreignCurrency) {
    chooseCurrency(foreignCurrency)
  }

  return (
    <>
      {firstHRK ? <span>HRK</span> : <CurrencyMenu chooseCurrency={chooseForeignCurency}/>}
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={toggle}
      >
        <ArrowForwardIcon />
      </Button>
      {firstHRK ? <CurrencyMenu chooseCurrency={chooseForeignCurency}/> : <span>HRK</span>}
    </>
  );
};

CurrencyChooserToggler.propTypes = {
  currencies: PropTypes.array.isRequired,
  chooseCurrency: PropTypes.func.isRequired,
  toggleCurrency: PropTypes.func.isRequired,
};

import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { CurrencyTable, CurrencyCalculator } from "./components";
import { hnbFetch, calculateValueForCurrencyOfOneUnit } from "./utils";

/* {
    broj_tecajnice: "145",
    datum_primjene: "2020-07-29",
    drzava: "Australija",
    drzava_iso: "AUS",
    sifra_valute: "036",
    valuta: "AUD",
    jedinica: 1,
    kupovni_tecaj: "4,558021",
    srednji_tecaj: "4,571736",
    prodajni_tecaj: "4,585451",
  }; */

export const CurrencyPage = () => {
  const [currencies, setCurrencies] = useState();

  useEffect(() => {
    async function fetchData() {
      return await hnbFetch();
    }
    
    fetchData().then((data) => {
      data.forEach(function(currency, index) {
        if(currency.jedinica === 100) {
          debugger;
          data[index].kupovni_tecaj = calculateValueForCurrencyOfOneUnit(currency.kupovni_tecaj, currency.jedinica)
          data[index].srednji_tecaj = calculateValueForCurrencyOfOneUnit(currency.srednji_tecaj, currency.jedinica)
          data[index].prodajni_tecaj = calculateValueForCurrencyOfOneUnit(currency.prodajni_tecaj, currency.jedinica)
          data[index].jedinica = currency.jedinica / currency.jedinica
        }
      });

      setCurrencies(data)
    });
  }, []);

  return (
    <>
      <Navbar />
      {currencies && 
        <>
          <CurrencyTable currencies={currencies}/>
          <CurrencyCalculator currencies={currencies}/>
        </>
      }
    </>
  );
};

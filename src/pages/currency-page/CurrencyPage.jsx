import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { CurrencyTable, CurrencyCalculator } from "./components";
import { hnbFetch, calculateValueForCurrencyOfHRK } from "./utils";

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
      const processedCurrencies = [];
      data.forEach(function (currency, index) {
        if (currency.jedinica === 100) {
          data[index].kupovni_tecaj = calculateValueForCurrencyOfHRK(
            currency.kupovni_tecaj,
            currency.jedinica
          );
          data[index].srednji_tecaj = calculateValueForCurrencyOfHRK(
            currency.srednji_tecaj,
            currency.jedinica
          );
          data[index].prodajni_tecaj = calculateValueForCurrencyOfHRK(
            currency.prodajni_tecaj,
            currency.jedinica
          );
          data[index].jedinica = currency.jedinica / currency.jedinica;
        }
        const kupovni = calculateValueForCurrencyOfHRK(
          currency.kupovni_tecaj,
          currency.jedinica
        );
        const srednji = calculateValueForCurrencyOfHRK(
          currency.srednji_tecaj,
          currency.jedinica
        );
        const prodajni = calculateValueForCurrencyOfHRK(
          currency.prodajni_tecaj,
          currency.jedinica
        );

        debugger;
        processedCurrencies.push({
          drzava: currency.drzava,
          drzava_iso: currency.drzava_iso,
          sifra_valute: currency.sifra_valute,
          valuta: currency.valuta,
          kupovni,
          srednji,
          prodajni,
        });
      });

      setCurrencies(processedCurrencies);
    });
  }, []);

  return (
    <>
      <Navbar />
      {currencies && (
        <>
          <CurrencyTable currencies={currencies} />
          <CurrencyCalculator currencies={currencies} />
        </>
      )}
    </>
  );
};

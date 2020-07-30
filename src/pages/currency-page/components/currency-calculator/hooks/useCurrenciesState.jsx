import React, { useState } from "react"

export const useCurrenciesState = (foreignCurrency) => {
    const homeCurrency = "HRK"
    const [currencies, setCurrencies] = useState({"first" : homeCurrency , "second" : foreignCurrency})

    function switchCurrencies() {
        setCurrencies({"first" : currencies.second, "second" : currencies.first})
    }

    function setForeignCurrency(newCurrency) {
        if(currencies.first !== homeCurrency) {
            setCurrencies({"first" : newCurrency, "second" : currencies.second})
        } else if(currencies.second !== homeCurrency) {
            setCurrencies({"first" : currencies.first, "second" : newCurrency})
        }
    }

    return [currencies, switchCurrencies, setForeignCurrency]
}
import { useState, useMemo } from "react"

export const useCurrenciesState = (foreignCurrency) => {
    const homeCurrency = "HRK"
    const [currencies, setCurrencies] = useState({"first" : homeCurrency , "second" : foreignCurrency})

    function switchCurrencies() {
        debugger
        setCurrencies({"first" : currencies.second, "second" : currencies.first})
    }

    function setForeignCurrency(newCurrency) {
        debugger;
        if(currencies.first !== homeCurrency) {
            setCurrencies({"first" : newCurrency, "second" : currencies.second})
        } else if(currencies.second !== homeCurrency) {
            setCurrencies({"first" : currencies.first, "second" : newCurrency})
        }
    }

    const isHomeFirst = useMemo(() => {
        debugger;
        return currencies.first === homeCurrency
    }, [currencies])

    return [currencies, switchCurrencies, setForeignCurrency, isHomeFirst]
}
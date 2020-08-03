import { useState } from "react"

export const useCurrenciesLocalisation = () => {
    const [locale, setLocale] = useState({"thousandSeparator" : "." , "decimalSeparator" : ","})

    const updateLocale = (localisation) => {
        debugger;
        switch(localisation) {
            case "UK":
                setLocale( {"thousandSeparator" : "." , "decimalSeparator" : ","})
                break
            case "EU":
                setLocale( {"thousandSeparator" : "," , "decimalSeparator" : "."})
                break
            default:
                setLocale( {"thousandSeparator" : "" , "decimalSeparator" : ","})
                break
        }
    }

    return [locale, updateLocale]
}
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { CurrencyTable, CurrencyCalculator } from "./components";
import { hnbFetch } from "./utils/hnbFetch";
import { fetchData } from "../../utils";

export const CurrencyPage = () => {

    const [currencies, setCurrencies] = useState()

    useEffect(() => {
        async function fetchData() {
            return await hnbFetch()
        }
        debugger;
        fetchData().then(data => setCurrencies(data));
        
    }, [])

    return (
        <>
            <Navbar />
            <div>
                {String(currencies)}
            </div>
            <CurrencyTable/>
            <CurrencyCalculator/>
        </>    
    )
}
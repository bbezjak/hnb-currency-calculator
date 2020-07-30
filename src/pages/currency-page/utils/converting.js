export function calculateValueForCurrencyOfOneUnit(currency, units) {
    const pom = parseFloat(currency.replace(/,/, '.'));
    const value = (pom / units).toFixed(6);
    return String(value).replace(".", ',')
}
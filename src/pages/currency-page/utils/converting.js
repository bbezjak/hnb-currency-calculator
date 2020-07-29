export function calculateValueForCurrencyOfOneUnit(currency, units) {
    const pom = parseFloat(currency.replace(/,/, '.'));
    return (pom / units).toFixed(6);
}
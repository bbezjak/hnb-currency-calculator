export function calculateValueForCurrencyOfHRK(currency, units) {
    const pom = parseFloat(currency.replace(/,/, '.'));
    const value = (units / pom).toFixed(6);
    return value
}
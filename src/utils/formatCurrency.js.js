export function formatCurrency(value, currency, locale = 'en-US') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
}

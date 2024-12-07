export function formatCurrency(amount: number, locale = "en-US") {
    return new Intl.NumberFormat(locale, {
      style: "decimal",
      minimumFractionDigits: 2, // Ensures two decimal places
      maximumFractionDigits: 2,
    }).format(amount);
  }
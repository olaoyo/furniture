const formatCurrency = (value) => {

  const options = { style: "currency", currency: "usd" };

  return new Intl.NumberFormat(navigator.language, options).format(value);
};

export default formatCurrency;


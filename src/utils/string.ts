export const moneyMask = (value: string) => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
  
    const options = { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'};
    const result = new Intl.NumberFormat('en-US', options).format(
      parseFloat(value)
    )
  
    return result;
  }
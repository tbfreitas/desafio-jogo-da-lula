export const moneyMask = (value: string) => {
  
    const options = {  minimumFractionDigits: 2 ,style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'};
    const result = new Intl.NumberFormat('en-US', options).format(
      parseFloat(value)
    )
  
    return result;
  }

  export const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }  
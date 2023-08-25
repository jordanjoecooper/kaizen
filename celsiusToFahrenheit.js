/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

*/

const convertCelsiusToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
}

convertCelsiusToFahrenheit(-111);
convertCelsiusToFahrenheit(111);

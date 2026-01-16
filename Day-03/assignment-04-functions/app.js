// Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
let c = 7;

function changeTemp(temp) {
  return (temp * 9) / 5 + 32;
}

const temp = changeTemp(c);
console.log(temp);

//maximum of two numbers..
function max_Number(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
}

const maxvalue = max_Number(3, 4);
console.log(maxvalue);

//palinndrome number..
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const s = "level";
console.log(isPalindrome(s));

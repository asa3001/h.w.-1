/////////// дз 1
function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`Факториал ${number} равен ${factorial}`);



////////////// 2 дз
const tet = "My name 457 is Alex";
const nonDigitCharacters = text.match(/\D/g);

if (nonDigitCharacters) {
  const result = nonDigitCharacters.join("");
  console.log(result);
} else {
  console.log("В строке нет символов цифрами.");
}



////////////дз 3
const text = "Hello\tWorld\nTest"; // Исправлено имя переменной
const whitespaceCharacters = text.match(/\s/g);

if (whitespaceCharacters) {
  const result = whitespaceCharacters.join("");
  console.log(result);
} else {
  console.log("В строке нет пробельных символов.");
}
///////////////доп 1

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const inputString = "loremipsumdolor";
const targetChar = "o";
const result = countChar(inputString, targetChar);
console.log(result); // Выведет 3
let userInput = prompt('Введите число:');
let number = Number(userInput);

if (userInput === '' || isNaN(number)) {
  console.log('Ошибка: введенная информация не является числом');
} else {
  if (number < 0) {
    number = number * -1;
  }

  number = parseInt(number);

  let digits = String(number);

  console.log('Количество разрядов: ' + digits.length);
  console.log('Первая цифра: ' + digits[0]);
}

let userInput = prompt('Введите строку:');

for (let i = userInput.length - 1; i >= 0; i = i - 2) {
  console.log(userInput[i]);
}

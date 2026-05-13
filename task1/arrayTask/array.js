let numbers = [
  [8, 55, 3],
  [12, 15, 5],
  [49, 8, 29]
];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    sum = sum + numbers[i][j] * numbers[i][j];
  }
}

console.log('Сумма квадратов элементов массива: ' + sum);

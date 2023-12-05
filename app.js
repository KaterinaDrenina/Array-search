const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log("Original array:" , array);

// Знайти суму та кількість позитивних елементів.
const positiveElements = array.filter(x => x > 0);
const sumPositive = positiveElements.reduce((acc, cur) => acc + cur, 0);
const numPositive = positiveElements.length;
console.log("Sum of positive elements:" , sumPositive);
console.log("Number of positive elements:" , numPositive);

// Знайти мінімальний елемент масиву та його порядковий номер.
const minElement = Math.min(...array);
const minIndex = array.indexOf(minElement);
console.log("Minimal element is:" , minElement);
console.log("Minimal element index is:" , minIndex);

// Знайти максимальний елемент масиву та його порядковий номер.
const maxElement = Math.max(...array);
const maxIndex = array.indexOf(maxElement);
console.log("Maximum element is:" , maxElement);
console.log("Maximum element index is:" , maxIndex);

// Визначити кількість негативних елементів.
const numNegative = array.filter(x => x < 0).length;
console.log("Number of negative elements is:" , numNegative);

// Знайти кількість непарних позитивних елементів.
const numOddPositive = positiveElements.filter(x => x % 2 !== 0).length;
console.log("Number of odd positive elements is:" , numOddPositive);

// Знайти кількість парних позитивних елементів.
const numEvenPositive = positiveElements.filter(x => x % 2 === 0).length;
console.log("Number of even positive elements is:" , numEvenPositive);

// Знайти суму парних позитивних елементів.
const sumEvenPositive = positiveElements.filter(x => x % 2 === 0).reduce((acc,cur) => acc + cur,0);
console.log("Sum of even positive elements is:", sumEvenPositive);

// Знайти суму непарних позитивних елементів.
const sumOddPositive = positiveElements.filter(x => x % 2 !== 0).reduce((acc,cur) => acc +cur,0);
console.log("Sum of odd positive elements is:", sumOddPositive);

// Знайти добуток позитивних елементів.
const multPositive = positiveElements.reduce((acc, cur) => acc * cur, 1);
console.log("Multiplication of positive elements is:", multPositive);

// Знайти найбільший серед елементів масиву, ост альні обнулити.
const largestElement = Math.max(...array);
const newArray = array.map(x => (x === largestElement ? x : 0));
console.log("New array:", newArray);


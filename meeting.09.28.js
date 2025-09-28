//*28.09.2025*/
// Темы: filter(), map(), reduce()

// 1.Убрать дубликаты из массива
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// Результат: [1, 2, 3, 4, 5]

const numbers = [1, 2, 2, 3, 4, 4, 5];
let result = numbers.filter((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
console.log(result);

function deleteDublicate(arr) {
  return numbers.filter((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
}
console.log(deleteDublicate(numbers));

// 2. Поиск палиндромов
// const words = ['level', 'hello', 'radar', 'world', 'madam', 'javascript'];
// Задача: оставить только слова-палиндромы (читаются одинаково слева направо и справа налево)
// Результат: ['level', 'radar', 'madam']
const words = ['level', 'hello', 'radar', 'world', 'madam', 'javascript'];
let newArr = []
for (let i = 0; i < words.length; i++) {
  if (words[i] === words[i].split('').reverse().join('')) {
    newArr.push(words[i])
  }
}
console.log(newArr);

const words1 = ['level', 'hello', 'radar', 'world', 'madam', 'javascript'];

function returnReverse(str) {
  let newWords = str.split('').reverse().join('')
  return newWords;
}

function searchPalindrom(params) {
  let res = params.filter((el) => el === returnReverse(el))
  return res;
}
console.log(searchPalindrom(words1));

// 3. Найти максимальное число в массиве 
// (Решить без сортировки и Math, при помощи изученных методов)
const numbers1 = [3, 7, 2, 9, 1, 5];

function returnMaxNumber(arr) {
  return arr.reduce((acc, num) => acc > num ? acc : num, 0)
}
console.log(returnMaxNumber(numbers1));

// 4. Преобразовать массив имен в приветствия
// const names = ['Anna', 'John', 'Maria'];
// Результат: ['Hello, Anna!', 'Hello, John!', 'Hello, Maria!']
const names = ['Anna', 'John', 'Maria'];
function returnGreeting(arr) {
  return arr.map((word) => `Hello ${word}!`)
}
console.log(returnGreeting(names));

// 5. Отфильтровать массив строк, оставив только те, что длиннее 5 символов
// const words = ['apple', 'cat', 'javascript', 'sun', 'computer'];
// Результат: ['javascript', 'computer']
const wordsNew = ['apple', 'cat', 'javascript', 'sun', 'computer'];
function showLongestWords(arr) {
  return arr.filter((word) => word.length > 5)
};
console.log(showLongestWords(wordsNew));

// 6. Найти самoе длинное слово в массиве
// const words = ['javascript', 'python', 'java', 'c++'];
// Результат: 'javascript'
const newWords = ['javascript', 'python', 'java', 'c++'];
// let newWord = [''];
function returnLongestWord(arr) {
  return arr.reduce((acc, val) => acc.length > val.length ? acc : val, '')
}
console.log(returnLongestWord(newWords));
// console.log(returnLongestWord(newWord));


// 7. Форматирование дат
// const dates = ['2024-01-15', '2024-02-20', '2024-03-10'];
// Задача: преобразовать в формат '15.01.2024'
// Результат: ['15.01.2024', '20.02.2024', '10.03.2024']
const dates = ['2024-01-15', '2024-02-20', '2024-03-10'];

let newDates = dates.map((value, i, arr) => arr[i].split('-').reverse().join('.'))
console.log(newDates);

function returNewDate2(arr) {
  return arr.map((value, i, arr) => arr[i].split('-').reverse().join('.'))
}
console.log(returNewDate2(dates));

function returNewDate(arr) {
  let newDates = [];
  for (let i = 0; i < arr.length; i++) {
    newDates.push(arr[i].split('-').reverse().join('.'))
  }
  return newDates
}
console.log(returNewDate(dates));


// 8. Фильтрация по длине и содержанию * ДЗ
// Задача: оставить предложения которые:
// - Длиннее 10 символов
// - Содержат слово 'programming' или 'development'
// - Не содержат слово 'hello'
// const sentences = [
//   'The quick brown fox',
//   'JavaScript is awesome',
//   'Hello world',
//   'Functional programming',
//   'I love coding',
//   'Web development'
// ];


// 9. Напишите функцию, которая принимает массив слов и 
// возвращает массив массивов, где слова-анаграммы сгруппированы вместе.

// function groupAnagrams(words) {
//   // Ваш код здесь
// }
// const words = ['cat', 'act', 'dog', 'god', 'tac', 'mouse', 'house'];
// console.log(groupAnagrams(words));
// Ожидаемый результат: 
// [['cat', 'act', 'tac'], ['dog', 'god'], ['mouse'], ['house']]



















// Задачи на будущее.
// 1. Подсчитать количество каждого элемента в массиве
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Результат: {apple: 3, banana: 2, orange: 1}
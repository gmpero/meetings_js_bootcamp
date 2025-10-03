/*03.10.2025*/

/*--- Теоретическая часть ---*/
/* 
Методы которые необходимо усвоить 
Object.keys Object.values, Object.entries, delete 
*/
let obj = {name: 'Ivan', age: 18};
let arrStrings = ['str 1', 'str 2', 'str 3'];

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(Object.keys(arrStrings));
console.log(Object.values(arrStrings));
console.log(Object.entries(arrStrings));

delete obj.name;
console.log(obj);

// Работаю ли методы обектов с массивами // Да, т.к массивы тоже обьекты

// for in, for of - в чем разница? Когда удобнее применять?
// for in - для обьектов
// for of - для массивов

// Что такое деструктуризация и как она может помочь перебрать обьект? 
for (let [key, value] of Object.entries(obj)){
    console.log(key);
    console.log(value);
    console.log('\n');
}

// Как пробежаться по массиву обьектов и вывести их все по очереди?
let arr = [
    {name: 'Ivan', age: 18},
    {name: 'Egor', age: 14},
    {name: 'Nikola', age: 38},
    {name: 'Ivan', age: 24}
]

for(let obj of arr){
    if(obj.name == 'Ivan'){
        console.log("Это Иван");
    }
}

/*--- Практическая часть ---*/
// 1. Напишите функцию для подсчета количества свойств в объекте
// const user = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     profession: 'developer'
// };
// console.log(countProperties(user)); 
// Ожидаемый результат: 4

// 2. Поиск максимального значения // Напишите функцию для нахождения максимальной зарплаты
// И выведите в человеко-понятном формате (Например, У Пети самая большая зп - 350 тугриков)
// const salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
//     Alex: 150
// };
// console.log(findMaxSalary(salaries)); 
// Ожидаемый результат: 300

// 3. Объединение объектов // Напишите функцию для объединения объектов
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { b: 5, e: 6 };
// console.log(mergeObjects(obj1, obj2, obj3)); 
// Ожидаемый результат: { a: 1, b: 5, c: 3, d: 4, e: 6 }

// 4. Фильтрация объекта. // Напишите функцию для фильтрации товаров по цене
// const products = {
//     laptop: 1000,
//     mouse: 25,
//     keyboard: 75,
//     monitor: 300,
//     cable: 10
// };
// console.log(filterByPrice(products, 100)); 
// Ожидаемый результат: { mouse: 25, keyboard: 75, cable: 10 }

// 5. Трансформация объекта // Напишите функцию для преобразования объекта
// const users = {
//     user1: { name: 'John', age: 25 },
//     user2: { name: 'Alice', age: 30 },
//     user3: { name: 'Bob', age: 28 }
// };
// Ожидаемый результат: [{id: 'user1', name: 'John', age: 25}, ...]

// 6. Сумма числовых свойств. // Напишите функцию для подсчета итогового баланса
// const budget = {
//     income: 5000,
//     rent: -1200,
//     food: -500,
//     transport: -200,
//     entertainment: -300,
//     bonus: 1000
// };
// console.log(calculateBalance(budget)); 
// Ожидаемый результат: 3800

// 7. Поиск по значению. Напишите функцию для поиска всех ID по имени
// const students = {
//     '001': 'Alice',
//     '002': 'Bob', 
//     '003': 'Alice',
//     '004': 'Charlie',
//     '005': 'Bob'
// };
// console.log(findStudentsByName(students, 'Alice')); 
// Ожидаемый результат: ['001', '003']

// 8. Группировка объектов. Напишите функцию для группировки заказов по категориям
// const orders = [
//     { id: 1, product: 'laptop', category: 'electronics', price: 1000 },
//     { id: 2, product: 'shirt', category: 'clothing', price: 50 },
//     { id: 3, product: 'phone', category: 'electronics', price: 500 },
//     { id: 4, product: 'pants', category: 'clothing', price: 80 }
// ];
// Ожидаемый результат: { electronics: [...], clothing: [...] }

// 9. Удаление свойств. Напишите функцию которая удаляет заданные свойства из обьекта.
// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     color: 'red'
// };
// console.log(deleteProperty(car, ['model', 'color'])); 
// Ожидаемый результат: {brand: 'Toyota', year: 2020}













// Задачи на будущий meet
/* 05.10.2025 */
// 10. Подсчитать количество каждого элемента в массиве
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Ожидаемый результат: {apple: 3, banana: 2, orange: 1}

// 11. // Посчитай количество каждой оценки
// const grades = ['A', 'B', 'A', 'C', 'B', 'A', 'D', 'B', 'A'];
// Ожидаемый результат: {A: 4, B: 3, C: 1, D: 1}

// 12. Статистика по длинам слов. Создай объект, где ключ - длина слова, значение - количество слов такой длины
// const words = ['cat', 'dog', 'elephant', 'cat', 'mouse', 'elephant'];
// Ожидаемый результат: {3: 3, 5: 1, 8: 2}

// 13. Сгруппируй имена по первой букве
// const names = ['Alice', 'Bob', 'Anna', 'Charlie', 'Alex', 'Barbara'];
// Ожидаемый результат: {A: ['Alice', 'Anna', 'Alex'], B: ['Bob', 'Barbara'], C: ['Charlie']}

// 14. Подсчет четных и нечетных чисел. Создайте объект с количеством четных и нечетных чисел
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Ожидаемый результат: {even: 5, odd: 5}

// 15. Статистика по категориям товаров. Посчитай количество товаров в каждой категории
// const products = [
//     {name: 'laptop', category: 'electronics'},
//     {name: 'shirt', category: 'clothing'},
//     {name: 'phone', category: 'electronics'},
//     {name: 'pants', category: 'clothing'},
//     {name: 'headphones', category: 'electronics'}
// ];
// Ожидаемый результат: {electronics: 3, clothing: 2}

// 16. Самый частый элемент. Найди цвет, который встречается чаще всего
// const colors = ['red', 'blue', 'red', 'green', 'blue', 'blue', 'yellow'];
// Ожидаемый результат: 'blue'

// 17. Группировка по возрасту. Сгруппируй людей по возрасту
// const people = [
//     {name: 'John', age: 25},
//     {name: 'Alice', age: 30},
//     {name: 'Bob', age: 25},
//     {name: 'Charlie', age: 30},
//     {name: 'David', age: 25}
// ];
// Ожидаемый результат: {25: ['John', 'Bob', 'David'], 30: ['Alice', 'Charlie']}

// 18. Подсчет уникальных элементов. Создай объект, показывающий, является ли элемент уникальным (встречается 1 раз)
// const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi'];
// Ожидаемый результат: {apple: false, banana: false, orange: true, kiwi: true}
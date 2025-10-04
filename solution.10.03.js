/* 
    !!!
    Это лишь некоторые из возможных решений. Не претендуют на истину в последней инстанции
    !!! 
*/

/*--- Практическая часть ---*/
// 1. Напишите функцию для подсчета количества свойств в объекте
const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    profession: 'developer'
};
// Ожидаемый результат: 4
const countProperties = (obj) => Object.keys(obj).length;
console.log(countProperties(user)); 


// 2. Поиск максимального значения // Напишите функцию для нахождения максимальной зарплаты
// И выведите в человеко-понятном формате (Например, У Пети самая большая зп - 350 тугриков)
// PS. Не стал это реализовывать, можете решить по желанию
const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
    Alex: 150
};
// Ожидаемый результат: 300
const findMaxSalary = (obj) => Math.max(...Object.values(obj));
console.log(findMaxSalary(salaries)); 


// 3. Объединение объектов // Напишите функцию для объединения объектов
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { b: 5, e: 6 };
// Ожидаемый результат: { a: 1, b: 5, c: 3, d: 4, e: 6 }
// Решение 1
const mergeObjects1 = (...objects) => {
    return objects.reduce((accum, object) => {
        for(const [key, value] of Object.entries(object)) {
            accum[key] = value;
        }
        return accum;
    }, {})
};
console.log(mergeObjects1(obj1, obj2, obj3)); 


// Решение 2
const mergeObjects2 = (...objects) => {
    return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
};


// 4. Фильтрация объекта. // Напишите функцию для фильтрации товаров по цене
const products = {
    laptop: 1000,
    mouse: 25,
    keyboard: 75,
    monitor: 300,
    cable: 10
};
// console.log(filterByPrice(products, 100)); 
// Ожидаемый результат: { mouse: 25, keyboard: 75, cable: 10 }
const filterByPrice = (object, filterValue) => {
    const resObject = new Object;
    const array = Object.entries(object);
    for (const [key, value] of array) {
        if (value < filterValue) {
            resObject[key] = value;
        }
    }
    return resObject;
};
console.log(filterByPrice(products, 100)); 


// 5. Трансформация объекта // Напишите функцию для преобразования объекта
const users = {
    user1: { name: 'John', age: 25 },
    user2: { name: 'Alice', age: 30 },
    user3: { name: 'Bob', age: 28 }
};
// Ожидаемый результат: [{id: 'user1', name: 'John', age: 25}, ...]
const transformObject = (object) => {
    const resultArray = new Array;
    for (const [key, valObject] of Object.entries(object)) {
        resultArray.push({id: key, ...valObject});
    }
    return resultArray;
};
console.log(transformObject(users));


// 6. Сумма числовых свойств. // Напишите функцию для подсчета итогового баланса
const budget = {
    income: 5000,
    rent: -1200,
    food: -500,
    transport: -200,
    entertainment: -300,
    bonus: 1000
};
// Ожидаемый результат: 3800
const calculateBalance = (obj) => Object.values(obj).reduce((accum, value) => typeof(value) == 'number' ? accum + value : accum, 0);
console.log(calculateBalance(budget)); 


// 7. Поиск по значению. Напишите функцию для поиска всех ID по имени
const students = {
    '001': 'Alice',
    '002': 'Bob', 
    '003': 'Alice',
    '004': 'Charlie',
    '005': 'Bob'
};
// Ожидаемый результат: ['001', '003']
const findStudentsByName = (obj, name) => {
    const resultArray = new Array;
    for (const [key, val] of Object.entries(obj)) {
        if (val === name) {
            resultArray.push(key);
        }
    }
    return resultArray;
}
console.log(findStudentsByName(students, 'Alice')); 


// 8. Группировка объектов. Напишите функцию для группировки заказов по категориям
const orders = [
    { id: 1, product: 'laptop', category: 'electronics', price: 1000 },
    { id: 2, product: 'shirt', category: 'clothing', price: 50 },
    { id: 3, product: 'phone', category: 'electronics', price: 500 },
    { id: 4, product: 'pants', category: 'clothing', price: 80 }
];
// Ожидаемый результат: { electronics: [...], clothing: [...] }
const groupByCategories = (obj, category = 'category') => {
    const resultObject = new Object;
    for(const el of obj) {
        if (resultObject[el[category]] === undefined)
            resultObject[el[category]] = []
        resultObject[el[category]].push(el);
    }
    return resultObject;
}
console.log(groupByCategories(orders));


// 9. Удаление свойств. Напишите функцию которая удаляет заданные свойства из обьекта.
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red'
};
// Ожидаемый результат: {brand: 'Toyota', year: 2020}
const deleteProperty = (obj, [...properties]) => {
    for (const property of properties) {
        delete obj[property];
    }
    return obj;
};
console.log(deleteProperty(car, ['model', 'color'])); 













// Задачи на будущий meet
/* 05.10.2025 */
// 10. Подсчитать количество каждого элемента в массиве
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Ожидаемый результат: {apple: 3, banana: 2, orange: 1}
const countFruits = (array) => {
    const resultObject = new Object;
    for (const element of array) {
        if(resultObject[element] === undefined)
            resultObject[element] = 0;
        resultObject[element] += 1;
    }
    return resultObject;
};
console.log(countFruits(fruits));


// 11. // Посчитай количество каждой оценки
const grades = ['A', 'B', 'A', 'C', 'B', 'A', 'D', 'B', 'A'];
// Ожидаемый результат: {A: 4, B: 3, C: 1, D: 1}
const countGrades = (array) => {
    const resultObject = new Object;
    for (const element of array) {
        if(resultObject[element] === undefined)
            resultObject[element] = 0;
        resultObject[element] += 1;
    }
    return resultObject;
};
console.log(countGrades(grades));


// 12. Статистика по длинам слов. Создай объект, где ключ - длина слова, значение - количество слов такой длины
const words = ['cat', 'dog', 'elephant', 'cat', 'mouse', 'elephant'];
// Ожидаемый результат: {3: 3, 5: 1, 8: 2}
const getStatisticWords = (array) => {
    const resultObject = new Object;
    for (const element of array) {
        let lengthWord = element.length;
        if(resultObject[lengthWord] === undefined)
            resultObject[lengthWord] = 0;
        resultObject[lengthWord] += 1
    }
    return resultObject;
};
console.log(getStatisticWords(words));


// 13. Сгруппируй имена по первой букве
const names = ['Alice', 'Bob', 'Anna', 'Charlie', 'Alex', 'Barbara'];
// Ожидаемый результат: {A: ['Alice', 'Anna', 'Alex'], B: ['Bob', 'Barbara'], C: ['Charlie']}
const getGroupNameByFirstCharacter = (array) => {
    const resultObject = new Object;
    for (element of names) {
        if(resultObject[element[0]] === undefined)
            resultObject[element[0]] = []
        resultObject[element[0]].push(element);
    }
    return resultObject;
};
console.log(getGroupNameByFirstCharacter(names));


// 14. Подсчет четных и нечетных чисел. Создайте объект с количеством четных и нечетных чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Ожидаемый результат: {even: 5, odd: 5}
const getCountEvenOddNumbers = (array) => {
    return array.reduce(
        (accum, value) => value % 2 == 0 ? {...accum, even: accum.even + 1} : {...accum, odd: accum.odd + 1}, 
        {even: 0, odd: 0}
    );
};
console.log(getCountEvenOddNumbers(numbers))


// 15. Статистика по категориям товаров. Посчитай количество товаров в каждой категории
const arrayProducts = [
    {name: 'laptop', category: 'electronics'},
    {name: 'shirt', category: 'clothing'},
    {name: 'phone', category: 'electronics'},
    {name: 'pants', category: 'clothing'},
    {name: 'headphones', category: 'electronics'}
];
// Ожидаемый результат: {electronics: 3, clothing: 2}
console.log(groupByCategories(arrayProducts));


// 16. Самый частый элемент. Найди цвет, который встречается чаще всего
const colors = ['red', 'blue', 'red', 'green', 'blue', 'blue', 'yellow'];
// Ожидаемый результат: 'blue'
const getOftenColor = (array) => {
    const colorObject = new Object;
    const resultObject = {name: undefined, count: 0};
    for (const element of array) {
        if(colorObject[element] === undefined)
            colorObject[element] = 0;
        colorObject[element] += 1;
        if(colorObject[element] > resultObject.count) {
            resultObject.name = element;
            resultObject.count = colorObject[element];
        }       
    }
    return resultObject.name;
}
console.log(getOftenColor(colors));


// 17. Группировка по возрасту. Сгруппируй людей по возрасту
const people = [
    {name: 'John', age: 25},
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 30},
    {name: 'David', age: 25}
];
// Ожидаемый результат: {25: ['John', 'Bob', 'David'], 30: ['Alice', 'Charlie']}
console.log(groupByCategories(people, 'age'));



// 18. Подсчет уникальных элементов. Создай объект, показывающий, является ли элемент уникальным (встречается 1 раз)
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'kiwi'];
// Ожидаемый результат: {apple: false, banana: false, orange: true, kiwi: true}
const getUniqElements = (array) => {
    const resultObject = new Object;
    for (const element of array) {
        if(array.indexOf(element) === array.lastIndexOf(element))
            resultObject[element] = true;
        else
            resultObject[element] = false;
    }
    return resultObject;
}
console.log(getUniqElements(items));
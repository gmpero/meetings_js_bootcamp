/* 05.10.2025 */


// Задачи для самообучения (Сложность повыше)
// Тема: объекты

// 1. Найди значение по строке пути
// console.log(getValue({user: {name: "John", age: 30}}, "user.name")); // → "John"
// console.log(getValue({a: {b: {c: 42}}}, "a.b.c")); // → 42


// 2. Верни объект с свойствами, которые отличаются между двумя объектами
// objectDifference({a: 1, b: 2, c: 3}, {a: 1, b: 4, d: 5}) 
// → {b: 2, c: 3, d: 5}


//  3. Создай каррированные версии всех функций в объекте
// const math = {
//     add: (a, b) => a + b,
//     multiply: (a, b) => a * b
// }
// curryObject(math)
// → {add: a => b => a + b, multiply: a => b => a * b}


// 4. "Прокрути" ключи объекта на N позиций
// rotateKeys({a: 1, b: 2, c: 3, d: 4}, 2) 
// → {c: 3, d: 4, a: 1, b: 2}


// 5. Сгруппируй значения объекта по диапазонам
// groupByRange({a: 15, b: 25, c: 35, d: 45}, [0, 20, 40, 60])
// → {"0-20": {a: 15}, "20-40": {b: 25, c: 35}, "40-60": {d: 45}}


// 6. Отфильтруй свойства по условию в значении
// filterByValue({a: 10, b: 25, c: 5}, value => value > 15)
// → {b: 25}


// 7. Найди все свойства, ключи которых содержат шаблон
// findByKeyPattern({user_name: "John", user_age: 30, admin_name: "Jane"}, "user")
// → {user_name: "John", user_age: 30}


// 8. Найди все пути к указанному значению в объекте
// findValuePaths({a: 1, b: {c: 2, d: 1}, e: {f: {g: 1}}}, 1)
// → ["a", "b.d", "e.f.g"]


// 9. Отфильтруй свойства по массиву разрешенных ключей
// filterByKeys({name: "John", age: 30, email: "john@test.com", password: "123"}, ["name", "email"])
// → {name: "John", email: "john@test.com"}


// 10. Примени функцию к каждому значению объекта
// objectMap({a: 1, b: 2, c: 3}, value => value * 2)
// → {a: 2, b: 4, c: 6}


// 11. Сгруппируй свойства по префиксу ключа
// groupByPrefix({user_name: "John", user_age: 30, post_title: "Hello", post_content: "World"})
// → {user: {name: "John", age: 30}, post: {title: "Hello", content: "World"}}


// 12. Создай вложенный объект из строки пути и значения
//createFromPath("user.profile.name", "John")
// → {user: {profile: {name: "John"}}}


// 13. Собери статистику по всем значениям объекта
// getStats({a: 10, b: 20, c: 30, d: 10})
// → {min: 10, max: 30, avg: 17.5, sum: 70}


// 14. Посчитай количество значений каждого типа
// countValueTypes({a: 1, b: "hello", c: true, d: 2, e: null})
// → {number: 2, string: 1, boolean: 1, object: 1}


// 15. Найди свойства, которые есть только в одном из объектов
// symmetricDifference({a: 1, b: 2, c: 3}, {b: 2, c: 4, d: 5})
// → {a: 1, c: 3, d: 5}


// 16. Проверь, что объект соответствует схеме
// validateSchema({name: "John", age: 30}, {name: "string", age: "number"})
// → true
//validateSchema({name: "John", age: "30"}, {name: "string", age: "number"})
// → false


// 17. Разбей объект на страницы по N свойств
// paginateObject({a:1,b:2,c:3,d:4,e:5,f:6}, 2)
// → [{a:1,b:2}, {c:3,d:4}, {e:5,f:6}]


// 18. Верни случайное свойство из объекта
// randomProperty({a: 1, b: 2, c: 3, d: 4})
// → {c: 3} (случайный выбор)
 


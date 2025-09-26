/*21.09.2025*/

// 1. Дана строка со словами. Отсортируйте слова в алфавитном порядке.

/* --------------------------------------------------------------------------- */

// 2. Дано число. Получите массив делителей этого числа.
// let number = 99;

// let resultArr = [];
// for (let i = 1; i < number / 2 - 1; i++) {
//     if(number % i === 0)
//     resultArr.push(i);
// }

// resultArr.push(number);
// console.log(resultArr);

/* --------------------------------------------------------------------------- */

// 3. Даны два числа. Получите массив общих делителей этих чисел.
// let num1 = 200;
// let num2 = 400;

// let arrRes = [];
// let length = num1 > num2 ? num2 : num1;

// for (let i = 1; i <= length; i++) {
//     if (num1 % i == 0 && num2 % i == 0)
//         arrRes.push(i);
// }

// console.log(arrRes);

/* --------------------------------------------------------------------------- */

// 4. Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
// let number = 100003;
// let resultArr = [];
// let result
// let length = number / 2 - 1;
// let length = number**1/2;

// for (let i = 2; i < length; i++) {
//     if (number % i === 0) {
//         console.log("У числа больше одного делителя");
//         break;
//     } 
// }
// console.log("Работа завершена");

/* --------------------------------------------------------------------------- */

// 5. Через запятую написаны числа. Получите максимальное из этих чисел.
// let string = "1,2,3,4,10,5,100,50,34";
// let arr = string.split(",");
// console.log(Math.max(...arr));

/* --------------------------------------------------------------------------- */

// 6. Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// let arr = [10, 1, 30, 7, 14, 10, 100, 8923, 900, -9, -10, -5, -100, 0];

// let arrRes = new Array();
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < 10 && arr[i] > -10) {
//         arr.splice(i + 1, 0, arr[i]);
//         i++;
//     }
// }

// console.log(arr);

/* ------------------------- */
// let arrRes = new Array();
// for (let i = 0; i < arr.length; i++) {
//     arrRes.push(arr[i]);
//     if(arr[i] < 10 && arr[i] > -10) {
//         arrRes.push(arr[i]);
//     }
// }

// console.log(arrRes);

/* --------------------------------------------------------------------------- */

// 7. Дана строка. Удалите из нее все гласные буквы.
// let string = "helloaaaeee worliiId! Hello WORLD";
// let arr = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

// for (let i = 0; i < arr.length; i++) {
//     string = string.replaceAll(arr[i], "");
// }

// console.log(string);

/* --------------------------------------------------------------------------- */
// 8. Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

// let string = "hello world";
// let arrRes = []
// let arr = string.split(" ");

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== "")
//         arrRes.push(arr[i].slice(0, -1) + arr[i].at(-1).toUpperCase());
// }
// let result = arrRes.join(" ");

// console.log(result);

// Решение Леры
let string = "hello world";
let arr = string.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ? arr[i].slice(0, -1) + arr[i].at(-1).toUpperCase() : arr[i];
}
let result = arr.join(" ");
console.log(result);


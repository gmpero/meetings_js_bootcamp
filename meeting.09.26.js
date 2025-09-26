// №1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// const text =
// "After an adventurous afternoon, Alice ate an avocado and drank aromatic tea. Ancient artifacts and antique armor are displayed at the archaeological museum.";
// let result = [];
// let newStr = text.split(" ");

// let result = newStr.filter((elem) => elem.at(0) === 'A' || elem.at(0) === 'a');

// console.log(result);

// function returnArr(string) {
//     let newStr = string.split(" ");
//     return newStr.filter((elem) => elem.at(0) === 'A' || elem.at(0) === 'a');
// };
// console.log(returnArr(text));

// for (let i = 0; i < newStr.length; i++) {
//   if (newStr[i].at(0) === "A" || newStr[i].at(0) === "a") {
//     result.push(newStr[i]);
//   }
// }

// console.log(result);

// №2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// let numbers = [1, 5, 11, 18, 25, 50, -10];

// console.log(numbers.filter((num) => num % 5 === 0));

// let result = array => array.filter((num) => num % 5 === 0);
// console.log(result(numbers));

// №3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// let numbers = [1, 5, 101, 18, 25, 50, -10];

// let result = (array) => array.filter((num) => +(String(num).includes('0'))); 

// console.log(result(numbers));

// let result = numbers.filter((num) => {
//     // console.log(typeof String(num));
//     return +(String(num).includes('0'))
// });

// console.log(result);
// console.log(typeof result[0]);

// №4 Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// let numbers = [1, 5, 101, 138, 25, 50, -10];

// let result = (array) => {
//     return array.toString().includes('3')
// }
// console.log(result(numbers));

// №5 Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let array = [123, 456, 789];

// let result = (arr) => {
//     return arr.flatMap((elem) => {
//         let newArr = [];
//         while (elem > 0) {
//             newArr.unshift(elem % 10);
//             elem = Math.floor(elem / 10);
//         }
//         return newArr;
//     })
// };

// console.log(result(array));

// №6 Напишите функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
// function returnSum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// };

// console.log(returnSum(1, 2, 3));

// №7 Напишите функцию, которая параметрами будет принимать любое количество строк и возвращать их конкатенацию.
// let arr = [1, 2, 3];
// console.log(...arr);
// function returnCancat(...strings) {
//     return strings.reduce((acc, str) => acc + str + " ", "");
// };

// console.log(returnCancat("Hello", "world", "!"));

// let str1 = 'mirghzkjbdnoejrg';
// let str2 = 'wutohngkjdnl';
// let result = str1 + str2;


// №8 Дан массив целых чисел. Напишите функцию которая вернет общие делители этих чисел.
let numbers = [50, 25, 75];

function getDevisors(array) {
    let min = Math.min(...numbers);
    let result = [];

    for (let i = 1; i <= min; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[j] % i !== 0)
                break;

            if(j == numbers.length - 1)
                result.push(i);
        }
    }
    return result;
}

console.log(getDevisors(numbers));




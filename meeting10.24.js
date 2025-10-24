// План 
// Что такое promise (синтаксис) res, rej
// console.log('Начало выполнения программы');
// const a = new Promise(function(resolve, reject){
//     let random = 0.4;
//     setTimeout(() => {
//         if(random < 0.5) {
//             resolve('Программа успешно выполнена');
//         }else{
//             reject("Программа упала с ошибкой");
//         }
//     }, 1000);
// });
// a.
//     then((data) => console.log(data)).
//     then(() => console.log('Конец выполнения программы'));
// a.catch((eror) => console.log(eror)).then((data) => console.log(data));
// a.finally(() => console.log('Всегда отрабатывает'));


// Состояние промиса: Создан -> Вызван -> Выполнен
// Как вызвать выполнение промиса?
// then catch для чего нужно?
// Как выполнять код синхронно и для чего это нужно?

// setTimeout()

console.log('Начало выполнения программы');
async function getDataById(id) {
    const json = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json());
    
      return json;
}
let result = await getDataById(7);

console.log(result);
console.log('Конец выполнения программы');
// console.log('Конец выполнения программы');

// Так для чего же async await если есть promise?
// Как избежать цепочки вызовов?

// https://jsonplaceholder.typicode.com/
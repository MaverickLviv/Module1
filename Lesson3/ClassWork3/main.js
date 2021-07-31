// - створити функцію яка приймає масив та виводить його


// let array =(`1,2,3,4,5`);
//
//     function printArray =(arr) {
//
// for (i = 0; i < array.length; i++)
//     document.write(<div>${arr[i]}</div>)
//     console.log(array[i]);
// }
// }
// printArray(array);


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// применить if else
// сравнивать каждое число с другими в условии
// если a меньше b и меньше c - вывести a
// иначе если b меньше a и меньше c вывести b
// иначе вывести c

// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// return
// }
//
// min(10, 8, 45);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//
//     } else if (b < a && b < c) {
//         console.log(b);
//     }
//     console.log(c);
//     return
// }
//
// max(3,66,32);


// - створити функцію яка повертає найбільше число з масиву

// создать переменную max и дать ей значение 0 элемента масива
// в цикле перебрать масив и на каждой итерации сравнивать значение max с элементом масива
// если значение элемента больше присваивать его переменной max
// вывести max

// let maxArr = [3, 21, 5, 77];
//
// function myMax(arr) {
//     let max = 0;
//     for (const arrElement of arr) {
//         if (arrElement > max) max = arrElement;
//     }
//     return max
// }
// let myMax1 = myMax(maxArr);
// console.log(myMax1);


// - створити функцію яка повертає найменьше число з масиву
// let minArr = [3, 21, 5, 77];
//
// function myMin(arr) {
//     let min = 0;
//     for (const arrElement of arr) {
//         if (arrElement > min) min = arrElement;
//     }
//     return min
// }
// let myMin1 = myMin(minArr);
// console.log(myMin1);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function mySum(a, b, c, action) {
//     let res = 'error';
//     if (action === '+') {
//         res =a + b + c;
//     }
//         return res;
//
// }
//  let res = mySum (2, 55, 666, '+');
// console.log(res);
//

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function mySum(a, b, c, plus, div) {
//     let res = 'error';
//     if (plus === '+', div === '/') {
//         res =(a + b + c)/3;
//     }
//     return res;
//
// }
// let res = mySum (2, 55, 666, '+', '/');
// console.log(res);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
//
// function genRandomArr(arrLen) {
//     let numbers = [];
//
//     for (let i = 0; i < arrLen; i++) {
//         numbers[i] = Math.round(Math.random() * 100);
//     }
//
//     printArr(numbers);
// }
//
// genRandomArr(25);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//
// function getKeys(objArr) {
//     let keys = [];
//
//     for (const obj of objArr) {
//         for (const key in obj) {
//             keys.push(key);
//         }
//     }
//
//     return keys;
// }
//
// console.log(getKeys([{ name: 'Dima', age: 13 }, { model: 'Camry' }]));

/*
- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
 */
//
// function getValues(objArr) {
//     let values = [];
//
//     for (const obj of objArr) {
//         for (const key in obj) {
//             values.push(obj[key]);
//         }
//     }
//
//     return values;
// }
//
// console.log(getValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));

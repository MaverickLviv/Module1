

// 1 - створити функцію яка обчислює та повертає площу прямокутника висотою

    // function calculator (a, b) {
    //      return a * b;
    // }
    //         let rectangle = calculator(10,20);
    // console.log(rectangle);
    // document.write(`<h1>Площа прямокутника =${res}</h1>`)

// 2 - створити функцію яка обчислює та повертає площу кола

    // function calculator (r) {
    //     return 3.14*r*r;
    // }
    //       let circle = calculator(10);
    // console.log(circle);
    // document.write(`<h1>Площа кола =${circle}</h1>`)

// 3 - створити функцію яка обчислює та повертає площу циліндру

    // function calculator (h, r) {
    //     return 2*3.14*r*h+2*3.14*r*r;
    //     }
    //         let cylinder =calculator(5, 10);
    //         console.log(cylinder);
    //           document.write(`<h1>Площа циліндра =${cylinder}</h1>`)


// 4 - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше,// а виводить найбільше (Math використовувати заборонено);


// function min_max (){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//         if (item < min) min = item;
//     }
//     document.write(max);
//     return min;
// }
// console.log(min_max(3,6,7,2,5,23,54,765,35,98,24,6,9,4))



// 5 - створити функцію яка  створює блок з текстом. Текст задати через аргумент
//   function createBlock (text){
//
//     document.write(`<div><h2>${text}</h2></div>`);
//     }
//     createBlock('Done')

// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(Library){
//         document.write(`<ul>
//
//        <li>text1</li>
//        <li>text2</li>
//        <li>text3</li>
//
//     </ul>`);
//
//     }
//     createUl('a')

// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     function createUl(a1,r){
//     document.write(`<ul>`);
//
//     for (let i=0; i<r; i++){
//         document.write('<li>${text}</li>');
//     }
//     document.write(`</ul>`);
// }
//     createUl(`What can i say, 5`);

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список


    // let array =[2, 5, 'Tango', 76, true, 'Charlie', 222, 'Alfa', 'Bravo', false, 'India', ];
    //
    // function createA(array){
    //     for (let i=0; i < array.length; i++), {
    //     const arrayElement = array['i'];
    //     document.write(`<li>${arrayElement}</li>`)
    //     }
    // }
    // createA(array);
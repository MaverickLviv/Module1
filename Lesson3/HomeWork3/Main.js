

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


function min_max (){
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max) max = item;
        if (item < min) min = item;
    }
    document.write(max);
    return min;
}
console.log(min_max(3,6,7,2,5,23,54,765,35,98,24,6,9,4))



// 5 - створити функцію яка  створює блок з текстом. Текст задати через аргумент


// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

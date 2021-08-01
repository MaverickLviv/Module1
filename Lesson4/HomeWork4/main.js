// - створити функцію, яка генерує масив рандомних
// числових цілих значень в діапазоні від 0 до 100.

    //     let array =[];
    //         function randomArray(array) {
    //             let min = 0;
    //             let max = 100;
    //             for (let i = min; i < max; i++) {
    //                 array.push(Math.floor(Math.random() * (max - min) + min));
    //
    //             }
    //             return array
    //         }
    // console.log(randomArray(array));

// - Змінти попередню функцію, щоб діапазон можна було визначити через
// аргументи.

// let array2 = []
// function getRandomInt(min, max, l) {
//     for (let i = 1; i <= l; i++) {
//         array2.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return array2
// }
// getRandomInt( 0, 55, 99)
// console.log(array2);

// - створити (або згенерувати, за допомоги попередньої функції) масив
// рандомних цілих числових значень. Відсортувати його за допомоги sort

// let array4 = []
// function getRandomInt4(min, max, l) {
//     for (let i = 1; i <= l; i++) {
//         array4.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return array4
// }
// getRandomInt4( 0, 100, 84);
// let sort = array4.sort(function (u1,u2){
//     return u1-u2;
// });
// console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// let array5 = []
// function getRandomInt5(min, max, l) {
//     for (let i = 1; i <= l; i++) {
//         array5.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return array5
// }
// getRandomInt5( 0, 100, 84);
// let filter = array5.filter(function (value){
//     return value % 2 === 0;
// })
// console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let array6 = []
// function getRandomInt6(min, max, l) {
//     for (let i = 1; i <= l; i++) {
//         array6.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return array6
// }
// getRandomInt6( 0, 100, 84);
// let map = array6.map(function (item){
//     return item+'';
// });
// console.log(map);
// let stringify = JSON.stringify(array6);
// console.log(stringify);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone){
    this.id= id;
    this.name= name;
    this.surname= surname;
    this.email=email;
    this.phone=phone;
}
let user= new User(7, 'Ira', 'Shevchenko', 'Shevchenko@ukr.net', '+380937854862');
console.log(user);



// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

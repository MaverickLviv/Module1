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
// function User(id, name, surname , email, phone){
//     this.id= id;
//     this.name= name;
//     this.surname= surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user= new User(7, 'Ira', 'Shevchenko', 'Shevchenko@ukr.net', '+380937854862');
// console.log(user);



// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users=[
//     new User( 91, 'Vasya', 'Kaz', 'Kaz@ukr.net', +380674422335 ),
//     new User( 84, 'Petya', 'Pen', 'Pen@ukr.net', +380676544562),
//     new User( 4, 'Kostya', 'Grom', 'Grom@ukr.net', +38079655312 ),
//     new User( 73, 'Igor', 'Pirog', 'Pirog@ukr.net', +3806777699450),
//     new User( 9, 'Senya', 'Popov', 'Popov@ukr.net', +380500566452 ),
//     new User( 64, 'Klava', 'Ooaass', 'Ooaass@ukr.net', +38063212154 ),
//     new User( 16, 'Toma', 'Ess', 'Ess@ukr.net', +380504211564 ),
//     new User( 56, 'Alla', 'Oss', 'Oss@ukr.net', +380686452266 ),
//     new User( 36, 'Masha', 'Ass', 'Ass@ukr.net', +380674645254 ),
//     new User( 25, 'Vova', 'Iss', 'Iss@ukr.net', +380634532154 ),
//
// ]
// console.log(users)
//


// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
// let filter6 = users.filter(function (User){
//     return User.id % 2 === 0;
// });
// console.log(filter6)
// // Відсортувати його по id. по зростанню (sort)
// let sort6 = users.sort(function (u1,u2){
//     return u1.id - u2.id;
// });
// console.log(sort6);
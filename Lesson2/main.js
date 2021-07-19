<!--        template 1.1-->
// <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//     інші об'єкти масиву
//   ...
//   ...
//   ...
//     -->
// </ul>
//
// /*
//             Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template1.1
//             */



let listOfItems =['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<div>')
for (const listOfItems of ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']) {
    console.log(listOfItems);
    document.write(`<div>${listOfItems}</div>`);

    document.write('/<div>')
}
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
//     Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// Шаблон застосувати до кожного об'єкта в масиві
// */


    //{name: vasya, surname: petrenko, age: 20, info: html}


    let listOfUsers =[
        {
            name: 'vasya',
            surname: 'ivanov',
            age: 20,
            info: 'https://342031.selcdn.ru/rusplt/images/06072020/1594031375780-upload.jpeg'
        },
        {
            name: 'vova',
            surname: 'petrov',
            age: 25,
            info: 'https://kinoreporter.ru/wp-content/uploads/2020/10/TASS_3118768.jpg'
        },
        {
            name: 'olya',
            surname: 'sidorov',
            age: 30,
            info:'https://www.soyuz.ru/public/uploads/files/2/7146846/20170926123640bd34f04737.jpg'
        },

]
        document.write(<div>)

         document.write(</div>)

</div>
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


    let listOfUsers
    document.write(<div>)

        let listOfUsers =[name: 'vasya', surname: 'ivanov', age: 20, info: 'html'];
        let listOfUsers =[name: 'vova', surname: 'petrov', age: 25, info: 'java'];
        let listOfUsers =[name: 'olya', surname: 'sidorov', age: 30, info:'c++'];


    document.write(</div>)

</div>
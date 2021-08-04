// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// //
//     document.getElementById('content');
//     console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
//
//     document.getElementById('rules');
//     console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// 1. Получить элемент при помощи document.getElementById
// 2. Записать в innerText новое значение

//     element = document.getElementById('content');
//     content.innerText ='Очень трудно, не знаю почему'


// -- замініть текст параграфа з id 'rules' на будь-який інший
//         rules.innerText ='Надо, Федя, надо'

// -- змініть кожному елементу колір фону на червоний
// 1. Все элементы можна получить из document.body.children
// или по отдельности и сохранить в массив
// 2. Проитерировать массив и дать каждому элементу новое
// значение для element.style.backgroundColor

// let pLists = document.body.getElementsByTagName('p');
// console.log(pLists);
// for (const pListElement of pLists) {
//         pListElement.style.background ='red';
// }
// let classLists = document.body.getElementsByClassName('fc_bp');
// console.log(classLists);
//
// for (const classListElements of classLists) {
//         classListElements.style.background ='red'
// }

// -- змініть кожному елементу колір тексту на синій
//
// for (const pListElement of pLists) {
//         pListElement.style.color ='blue';
// }
// for (const classListelement of classList) {
//         classListelement.style.color ='blue';
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в
// console.log
//       document.getElementById('fc_rules rule1');
//       console.log('rules');



// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний ьексь
//
//       let classLists2 = document.getElementsByClassName('fc_rules');
//       console.log(classLists2);
//       for (let classList2Elements of classLists2) {
//             console.log(classList2Elements.oneclick = () => console);(classList2Elements.textContent);
//             console.log(classList2Elements.oneclick = () => console);(classList2Elements.innerHTML = 'Hell');
//       }

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
    for (const classListElement2 of classList2) {
          classListElement2.style.color = 'red'
    }
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
for (const item of listOfItems) {



    document.write(`<div>${listOfItems}</div>`);
}
    document.write('/<div>')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
//     Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// Шаблон застосувати до кожного об'єкта в масиві
// */


    //{name: vasya, surname: petrenko, age: 20, info: html}


    let heroes =[
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

        document.write('<div>');
        for (const user of heroes) {
         document.write(
        `<div class="user">
                    ${user.name} ${user.surname} ${user.age}  ${user.info}  <img src="${user.photo}" alt="">
            </div>`);


        }
//2-2
//     <!--template 2.2-->
//     <div>
//         <h2>NAME SURNAME. age is - AGE</h2>
//         <p>INFO</p>
//         <img src="PHOTO" alt="">
//     </div>
//     <!--
//     інші об'єкти з масиву
//     ...
//     ...
//     ...
//     -->
for (const user of heroes) {
    document.write(
        `<div class="user2">
                           <h2> ${user.name}  ${user.surname} age is ${user.age}</h2>
                           <p> ${user.info}</p>
                           <img src="${user.photo}" alt="">
            </div>`);
}
// <!--template 2.3-->
// <div>
//     <div>
//         <h2>NAME SURNAME. age is - AGE</h2>
//         <p>INFO</p>
//         <img src="PHOTO" alt="">
//     </div>
//     <!--
// інші об'єкти з масиву
//     ...
//     ...
//     ...
//     ...
//     -->
//
//
// </div>
document.write(`<div>`)
for (const user of heroes) {
    document.write(
        `<div class="user3">
                           <h2> ${user.name}  ${user.surname} age is ${user.age}</h2>
                           <p> ${user.info}</p>
                           <img src="${user.photo}" alt="">
            </div>`);
}
document.write(`</div>`)

/*
            Використовуючи данні з масиву, за допомоги document.write та циклу
            побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
            Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
                */
// <!--        template 3.1-->
// <div>
//     <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="" alt="" class="product-image">
//     </div>
//     <!--
//                 інші об'єкти з масиву
//                 ...
//                 ...
//                 ...
//     -->
//
// </div>

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div>`);
for (const product of products) {
    document.write(`<div class="product-card">
                <h3 class="product-title"> ${product.title} prise - ${product.price} UAN </h3>
                <img src="${product.image}" alt="" class="product-image">
                `);
    document.write(`</div>`);

}

document.write(`</div>`);


</script>
</body>
</html>



</div>
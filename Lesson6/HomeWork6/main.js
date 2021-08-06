// <!--1.-->
// <!--Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті-->
// <!--https://jsonplaceholder.typicode.com/posts-->
//
//     <!--2.-->
//     <!--Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті-->
//     <!--https://jsonplaceholder.typicode.com/comments-->

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts)
        const postsDiv =document.getElementById('posts');
        for (const post of posts){
           const postDiv =document.createElement('div');
           postDiv.classList.add('post'); /*елемент, свойство, метод*/
            const postTitle =document.createElement('h2');
            postTitle.innerText =`${post.id}. ${post.title}`;
        }
    } );




fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => console.log(value));


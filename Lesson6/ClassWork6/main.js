// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в
// прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий
//     блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts)
        const postsDiv =document.getElementById('posts');
        for (const post of posts){
            const postDiv =document.createElement('div');
            postDiv.classList.add('post'); /*елемент, свойство, метод*/
            const postTitle =document.createElement('h2'); /*елементу присваиваю h2*/
            postTitle.innerText =`${post.id}. ${post.title}`;
            const postBody =document.createElement('p');
            postBody.innerText =post.body;
            postDiv.append(postTitle,postBody);
            postsDiv.append(postDiv);
        }
    } );

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
            const postTitle =document.createElement('h2'); /*елементу присваиваю h2*/
            postTitle.innerText =`${post.id}. ${post.title}`;
            const postBody =document.createElement('p');
            postBody.innerText =post.body;
            postDiv.append(postTitle,postBody);
            postsDiv.append(postDiv);
        }
    } );


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        console.log(comments)
        const commentsDiv =document.getElementById('comments');
        for (const comment of comments){
            const commentDiv =document.createElement('div');
            commentDiv.classList.add('comment');
            const commentEmail =document.createElement('h2');
            commentEmail.innerText =`${comment.id}. ${comment.email}`;
            const commentBody =document.createElement('p');
            commentBody.innerText=comment.body;
            commentDiv.append(commentEmail,commentBody);
            commentsDiv.append(commentDiv);

        }
    });


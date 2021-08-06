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
            const getCommentsBtn =document.createElement('button');
            getCommentsBtn.innerText ='push';
            getCommentsBtn.addEventListener('click', getPost, {once:true})
            function getPost (){
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        console.log(comments)
                        const commentsDiv =document.createElement('div');
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
                        postDiv.append(commentsDiv);
                    });
            }




            postDiv.append(postTitle,postBody,getCommentsBtn);
            postsDiv.append(postDiv);
        }
    } );

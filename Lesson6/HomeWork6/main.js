fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => console.log(value));


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => console.log(value));
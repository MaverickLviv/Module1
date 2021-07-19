let listOfItems =['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<div>')
for (const listOfItems of ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']) {
    console.log(listOfItems);
    document.write(`<div>${listOfItems}</div>`);

    document.write('/<div>')
}
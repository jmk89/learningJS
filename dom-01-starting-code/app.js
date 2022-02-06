//selects the body node
// document.body 
//selects the head element node
// document.head
//selects the html element node
// document.documentElement

// document.querySelector('.list-item');
// document.querySelectorAll('.list-item');

// document.querySelector('ul li:first-of-type');

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title';
h1.style.color = 'white';
h1.style.backgroundColor = 'dodgerBlue';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (changed)'

const body = document.body;

const listItemElements = document.querySelectorAll('li');

// for (const listItem of listItemElements) {
//   console.dir(listItem)
// }
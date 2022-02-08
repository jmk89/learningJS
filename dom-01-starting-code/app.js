const list = document.querySelector('ul');
const newLi = document.createElement('li');
const anotherLi = document.createElement('li');

newLi.textContent = 'item 4';
newLi.style.backgroundColor = 'blue'
list.prepend(newLi);

list.lastElementChild.before(anotherLi)
list.firstElementChild.replaceWith(anotherLi)

const secondLi = list.children[1];
secondLi.insertAdjacentElement('afterend', newLi)

//true makes it a deep clone
const clone = newLi.cloneNode(true);
list.append(clone)
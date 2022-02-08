const list = document.querySelector('ul');
//note that queryselector is not a "live" node list, rather a snapshot / static
const listItems = document.querySelectorAll('li');
//getElementsByTagName is a live node list, will include most recent updates
const listItems2 = list.getElementsByTagName('li');
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

//remove is not supported by IE 
list.remove();
//therefore use parentElement.removeChild
list.parentElement.removeChild(list);
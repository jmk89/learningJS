const sayHello = (name, greeting = 'Hello ') => {
  return greeting + ' ' + name;
};

const checkInput = (callback, ...args) => {
  let foundEmpty = false;
  for (let arg of args) {
    if (arg === '') {
      foundEmpty = true;
    }
  }
  if (!foundEmpty) {
    callback();
  }
};

const noEmpty = () => {
  console.log('no empty');
}

checkInput(noEmpty, 'test', 'second', '')
sayHello('joel', 'sup');

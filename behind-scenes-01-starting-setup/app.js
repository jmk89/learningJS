// //using var lets you redeclare, this isn't desirable
// let myname = 'jmk';

// if (myname === 'jmk') {
//   //since this var isn't in a function, it's a global
//   //using let or const would scope it to this block
//   var hobbies = ['cheam', 'bike'];
//   console.log(hobbies);
// }

// function greet() {
//   let age = 32;
//   //this is called shadowing
//   //inner declaration overrides outer/global declaration
//   let myname = 'monke'
//   console.log(myname, age);
// }

// greet();

// console.log(myname, hobbies);


// example of hoisting, "let" and "const" prevent this
console.log(userName);
var userName = 'JMK';
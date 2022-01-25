const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
  console.log('Game is starting...');
};

// const person = {
//   greet: function greet() {
//     console.log('hello there');
//   }
// };

// person.greet();

//anonymous function
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
});
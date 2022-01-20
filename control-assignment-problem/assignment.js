const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();
if (randomNumber > 0.7) {
  alert('greater than 0.7');
}

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || (randomNumber < 0.2 || randomNumber2 < 0.2)) {
  alert('second condition');
}

const numArray = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

let j = numArray.length - 1;
while (j >= 0) {
  console.log(numArray[j]);
  j--;
}
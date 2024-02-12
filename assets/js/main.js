//--------------------------------------------------------------------------
// Rock Paper Scissors
//--------------------------------------------------------------------------

const outputYou = document.querySelector(".you");
const outputEnemy = document.querySelector(".enemy");
const outputResult = document.querySelector(".result");

const startGame = (clickedValue) => {
  // Get random number
  const enemysMove = Math.floor(Math.random() * 3);

  // 0 --> enemysMove = rock
  // 1 --> enemysMove = paper
  // 2 --> enemysMove = scissors

  switch (clickedValue) {
    case "rock":
      if (enemysMove === 0) {
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: Rock";
        outputEnemy.innerHTML = "Enemy Choose: Rock";
      } else if (enemysMove === 1) {
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: Rock";
        outputEnemy.innerHTML = "Enemy Choose: Paper";
      } else {
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: Rock";
        outputEnemy.innerHTML = "Enemy Choose: Scissors";
      }
      break;
    case "paper":
      if (enemysMove === 0) {
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: Paper";
        outputEnemy.innerHTML = "Enemy Choose: Rock";
      } else if (enemysMove === 1) {
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: Paper";
        outputEnemy.innerHTML = "Enemy Choose: Paper";
      } else {
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: Paper";
        outputEnemy.innerHTML = "Enemy Choose: Scissors";
      }
      break;
    case "scissors":
      if (enemysMove === 0) {
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: Scissors";
        outputEnemy.innerHTML = "Enemy Choose: Rock";
      } else if (enemysMove === 1) {
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: Scissors";
        outputEnemy.innerHTML = "Enemy Choose: Paper";
      } else {
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: Scissors";
        outputEnemy.innerHTML = "Enemy Choose: Scissors";
      }
      break;
    default:
      break;
  }
};

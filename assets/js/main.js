//--------------------------------------------------------------------------
// Rock Paper Scissors
//--------------------------------------------------------------------------

const outputYou = document.querySelector(".you");
const outputEnemy = document.querySelector(".enemy");
const outputResult = document.querySelector(".result");
const outputRounds = document.querySelector(".rounds");
const outputScore = document.querySelector(".score");

let round = 0;

const startGame = (clickedValue) => {
  // Get random number
  const enemysMove = Math.floor(Math.random() * 3);

  // 0 --> enemysMove = rock
  // 1 --> enemysMove = paper
  // 2 --> enemysMove = scissors

  if (clickedValue === "rock") {
    switch (enemysMove) {
      case 0: // ----- rock
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: <span>Rock</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Rock</span>";
        break;
      case 1: // ----- paper
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: <span>Rock</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Paper</span>";
        break;
      default: // ---- scissors
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: <span>Rock</span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span>Scissors</span>";
        break;
    }
  } else if (clickedValue === "paper") {
    switch (enemysMove) {
      case 0: // ----- rock
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose:  <span>Paper</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Rock</span>";
        break;
      case 1: // ----- paper
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose:  <span>Paper</span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span>Paper</span>";
        break;
      default: // ---- scissors
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose:  <span>Paper</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Scissors</span>";
        break;
    }
  } else {
    switch (enemysMove) {
      case 0: // ----- rock
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: <span>Scissors</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Rock</span>";
        break;
      case 1: // ----- paper
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: <span>Scissors</span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span>Paper</span>";
        break;
      default: // ---- scissors
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: <span>Scissors</span>";
        outputEnemy.innerHTML = "Enemy Choose: <span>Scissors</span>";
        break;
    }
  }

  round++;
  outputRounds.innerHTML = "Rounds: " + round;

  if (round == 3) {
    round = 0;
    outputRounds.innerHTML = "Rounds:";
  }
};

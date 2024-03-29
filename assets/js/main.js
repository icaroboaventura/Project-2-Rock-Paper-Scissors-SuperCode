//--------------------------------------------------------------------------
// Rock Paper Scissors
//--------------------------------------------------------------------------

const outputYou = document.querySelector(".you");
const outputEnemy = document.querySelector(".enemy");
const outputResult = document.querySelector(".result");
const outputRounds = document.querySelector(".rounds");
const outputScore = document.querySelector(".score");

let round = 0;
// let maxRound = 3;
let youScore = 0;
let enemyScore = 0;

const startGame = (clickedValue) => {
  // Get random number
  const enemysMove = Math.floor(Math.random() * 3);

  // 0 --> enemysMove = rock
  // 1 --> enemysMove = paper
  // 2 --> enemysMove = scissors

  if (clickedValue === "rock") {
    switch (enemysMove) {
      case 0: // ----- rock
        // maxRound++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        break;
      case 1: // ----- paper
        enemyScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/paper.png' alt='paper'></span>";
        break;
      default: // ---- scissors
        youScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        break;
    }
  } else if (clickedValue === "paper") {
    switch (enemysMove) {
      case 0: // ----- rock
        youScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose:  <span><img src='./assets/img/paper.png' alt='paper'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        break;
      case 1: // ----- paper
        // maxRound++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose:  <span><img src='./assets/img/paper.png' alt='paper'></span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span><img src='./assets/img/paper.png' alt='paper'></span>";
        break;
      default: // ---- scissors
        enemyScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose:  <span><img src='./assets/img/paper.png' alt='paper'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        break;
    }
  } else {
    switch (enemysMove) {
      case 0: // ----- rock
        enemyScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Lose!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/rock.png' alt='rock'></span>";
        break;
      case 1: // ----- paper
        youScore++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "You Win!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        outputEnemy.innerHTML = "Enemy Choose:  <span><img src='./assets/img/paper.png' alt='paper'></span>";
        break;
      default: // ---- scissors
        // maxRound++;
        outputScore.innerHTML = youScore + " X " + enemyScore;
        outputResult.innerHTML = "Draw!";
        outputYou.innerHTML = "You Choose: <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        outputEnemy.innerHTML = "Enemy Choose: <span><img src='./assets/img/scissors.png' alt='scissors'></span>";
        break;
    }
  }

  round++;
  outputRounds.innerHTML = "Rounds: " + round;

  if (round == 3) {
    round = 0;
    youScore = 0;
    enemyScore = 0;
  }
};

const restart = () => {
  round = 0;
  youScore = 0;
  enemyScore = 0;
  outputResult.innerHTML = "";
  outputYou.innerHTML = "";
  outputEnemy.innerHTML = "";
  outputRounds.innerHTML = "Rounds: ";
  outputScore.innerHTML = "0 X 0";
};

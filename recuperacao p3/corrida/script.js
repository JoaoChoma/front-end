const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const item = document.getElementById("item");
const scoreValue = document.getElementById("score-value");

let score = 0;
let playerPosition = 50;
let obstaclePosition = getRandomPosition();
let itemPosition = getRandomPosition();

function getRandomPosition() {
  return Math.floor(Math.random() * 350) + 25;
}

function updatePlayer() {
  player.style.left = `${playerPosition}px`;
}

function updateObstacle() {
  obstacle.style.top = `${obstaclePosition}px`;
}

function updateItem() {
  item.style.top = `${itemPosition}px`;
}

function checkCollision() {
  if (
    playerPosition >= obstaclePosition - 50 &&
    playerPosition <= obstaclePosition + 50
  ) {
    gameOver();
  }

  if (
    playerPosition >= itemPosition - 30 &&
    playerPosition <= itemPosition + 30
  ) {
    increaseScore();
    updateItem();
  }
}

function increaseScore() {
  score++;
  scoreValue.textContent = score;
}

function gameOver() {
  alert(`Game Over! Pontuação: ${score}`);
  score = 0;
  scoreValue.textContent = score;
  obstaclePosition = getRandomPosition();
  itemPosition = getRandomPosition();
}

function movePlayer(event) {
  if (event.key === "ArrowLeft" && playerPosition > 25) {
    playerPosition -= 10;
  } else if (event.key === "ArrowRight" && playerPosition < 375) {
    playerPosition += 10;
  }
  updatePlayer();
}

function updateGame() {
  obstaclePosition += 5;
  itemPosition += 5;

  if (obstaclePosition > 600) {
    obstaclePosition = getRandomPosition();
  }

  if (itemPosition > 600) {
    itemPosition = getRandomPosition();
  }

  updateObstacle();
  updateItem();
  checkCollision();
}

setInterval(updateGame, 20);
document.addEventListener("keydown", movePlayer);

const bird = document.getElementById("bird");
const obstacles = document.getElementById("obstacles");
const scoreValue = document.getElementById("score-value");
const startButton = document.getElementById("start-button");

let birdPosition = 250;
let gravity = 0.5;
let velocity = 0;
let gameInterval;
let score = 0;

function jump() {
  velocity = -7;
}

function startGame() {
  startButton.disabled = true;
  startButton.textContent = "Jogando...";
  birdPosition = 250;
  velocity = 0;
  score = 0;
  scoreValue.textContent = score;
  obstacles.innerHTML = "";

  gameInterval = setInterval(updateGame, 20);
}

function updateBird() {
  velocity += gravity;
  birdPosition += velocity;
  bird.style.top = `${birdPosition}px`;

  if (birdPosition > 560) {
    gameOver();
  }
}

function updateObstacles() {
  const obstacleGap = 600;
  const obstacleWidth = 50;
  const minObstacleHeight = 50;
  const maxObstacleHeight = 400;
  const obstaclePosition = 400;

  if (obstaclePosition % obstacleGap === 0) {
    const obstacleHeight =
      Math.random() * (maxObstacleHeight - minObstacleHeight) +
      minObstacleHeight;

    const topObstacle = document.createElement("div");
    topObstacle.classList.add("obstacle");
    topObstacle.style.height = `${obstacleHeight}px`;
    topObstacle.style.left = `${obstaclePosition}px`;

    const bottomObstacle = document.createElement("div");
    bottomObstacle.classList.add("obstacle");
    bottomObstacle.style.height = `${600 - obstacleHeight - obstacleGap}px`;
    bottomObstacle.style.left = `${obstaclePosition}px`;

    obstacles.appendChild(topObstacle);
    obstacles.appendChild(bottomObstacle);
  }

  const obstacleList = document.querySelectorAll(".obstacle");
  obstacleList.forEach(function (obstacle) {
    obstacle.style.left = `${parseInt(obstacle.style.left) - 1}px`;

    if (
      obstacle.getBoundingClientRect().right < 0 &&
      obstacle.parentNode === obstacles
    ) {
      obstacles.removeChild(obstacle);
      score += 1;
      scoreValue.textContent = score;
    }
  });
}

function checkCollision() {
  const obstacleList = document.querySelectorAll(".obstacle");
  obstacleList.forEach(function (obstacle) {
    const birdRect = bird.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
      birdRect.left < obstacleRect.right &&
      birdRect.right > obstacleRect.left &&
      birdRect.top < obstacleRect.bottom &&
      birdRect.bottom > obstacleRect.top
    ) {
      gameOver();
    }
  });
}

function gameOver() {
  clearInterval(gameInterval);
  startButton.disabled = false;
  startButton.textContent = "Reiniciar";
}

function updateGame() {
  updateBird();
  updateObstacles();
  checkCollision();
}

startButton.addEventListener("click", startGame);
document.addEventListener("keydown", jump);

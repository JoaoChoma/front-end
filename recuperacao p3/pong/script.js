const paddleLeft = document.getElementById("paddle-left");
const paddleRight = document.getElementById("paddle-right");
const ball = document.getElementById("ball");

const pongTable = document.querySelector(".pong-table");
const tableWidth = pongTable.offsetWidth;
const tableHeight = pongTable.offsetHeight;

const paddleHeight = paddleLeft.offsetHeight;
const paddleSpeed = 10;

let paddleLeftY = tableHeight / 2 - paddleHeight / 2;
let paddleRightY = tableHeight / 2 - paddleHeight / 2;
let ballX = tableWidth / 2 - 5;
let ballY = tableHeight / 2 - 5;
let ballSpeedX = 1;
let ballSpeedY = 1;

let scoreLeft = 0;
let scoreRight = 0;

function movePaddleLeftUp() {
  paddleLeftY -= paddleSpeed;
  if (paddleLeftY < 0) {
    paddleLeftY = 0;
  }
  paddleLeft.style.top = `${paddleLeftY}px`;
}

function movePaddleLeftDown() {
  paddleLeftY += paddleSpeed;
  if (paddleLeftY + paddleHeight > tableHeight) {
    paddleLeftY = tableHeight - paddleHeight;
  }
  paddleLeft.style.top = `${paddleLeftY}px`;
}

function movePaddleRightUp() {
  paddleRightY -= paddleSpeed;
  if (paddleRightY < 0) {
    paddleRightY = 0;
  }
  paddleRight.style.top = `${paddleRightY}px`;
}

function movePaddleRightDown() {
  paddleRightY += paddleSpeed;
  if (paddleRightY + paddleHeight > tableHeight) {
    paddleRightY = tableHeight - paddleHeight;
  }
  paddleRight.style.top = `${paddleRightY}px`;
}

function updateBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY < 0 || ballY + 10 > tableHeight) {
    ballSpeedY *= -1;
  }

  if (ballX < 0) {
    if (ballY + 10 >= paddleLeftY && ballY <= paddleLeftY + paddleHeight) {
      ballSpeedX *= -1;
    } else {
      scoreRight++;
      resetBall();
    }
  }

  if (ballX + 10 > tableWidth) {
    if (ballY + 10 >= paddleRightY && ballY <= paddleRightY + paddleHeight) {
      ballSpeedX *= -1;
    } else {
      scoreLeft++;
      resetBall();
    }
  }

  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;

  updateScore();
}

function resetBall() {
  ballX = tableWidth / 2 - 5;
  ballY = tableHeight / 2 - 5;
  ballSpeedX *= -1;
  ballSpeedY *= Math.random() < 0.5 ? -1 : 1;
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `${scoreLeft} : ${scoreRight}`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    movePaddleLeftUp();
  } else if (event.key === "s") {
    movePaddleLeftDown();
  } else if (event.key === "ArrowUp") {
    movePaddleRightUp();
  } else if (event.key === "ArrowDown") {
    movePaddleRightDown();
  }
});

setInterval(updateBall, 10);

// pong.js

const canvas = document.getElementById("pongCanvas");
const context = canvas.getContext("2d");

const paddleWidth = 10;
const paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;

const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

// Draw game elements
function drawRect(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function drawBall(x, y, size, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2, true);
  context.fill();
}

// Update game elements
function update() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball collision with top/bottom
  if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
    ballSpeedY = -ballSpeedY;
  }

  // Ball collision with player paddle
  if (ballX - ballSize < paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
  }

  // Ball collision with AI paddle
  if (ballX + ballSize > canvas.width - paddleWidth && ballY > aiY && ballY < aiY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
  }

  // AI movement
  if (aiY + paddleHeight / 2 < ballY) {
    aiY += 3;
  } else {
    aiY -= 3;
  }

  // Reset ball if it goes off screen
  if (ballX < 0 || ballX > canvas.width) {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
  }
}

// Render game frame
function render() {
  // Clear screen
  drawRect(0, 0, canvas.width, canvas.height, "black");

  // Draw paddles
  drawRect(0, playerY, paddleWidth, paddleHeight, "white");
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, "white");

  // Draw ball
  drawBall(ballX, ballY, ballSize, "white");
}

// Game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

function startPongGame() {
  gameLoop();
}

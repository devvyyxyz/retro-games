// pongUtils.js
// Utility functions for the Pong game
// This can be expanded as needed

function isCollision(ballY, paddleY, paddleHeight) {
    return ballY > paddleY && ballY < paddleY + paddleHeight;
  }
  
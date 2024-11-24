// main.js

document.addEventListener("DOMContentLoaded", () => {
  loadGames();
});

function playGame(gameName) {
  if (gameName === 'Pong') {
    // Show Pong game container and initialize Pong game
    const pongGameContainer = document.getElementById("pongGameContainer");
    pongGameContainer.classList.remove("hidden");
    startPongGame();
  }
}

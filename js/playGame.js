// playGame.js

function playGame(gameName) {
    const game = games.find((g) => g.name === gameName);
    if (game) {
      game.playCount++;
      document.getElementById(`playCount-${game.id}`).innerText = game.playCount;
      console.log(`Playing ${game.name}, play count: ${game.playCount}`);
    }
  }
  
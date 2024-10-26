// loadGames.js

// Define game data
const games = [
    { id: 1, name: "Pong", year: 1972, playCount: 0 },
    { id: 2, name: "Tetris", year: 1984, playCount: 0 },
    { id: 3, name: "Space Invaders", year: 1978, playCount: 0 },
    { id: 4, name: "Pac-Man", year: 1980, playCount: 0 },
    { id: 5, name: "Donkey Kong", year: 1981, playCount: 0 },
    { id: 6, name: "Galaga", year: 1981, playCount: 0 },
  ];
  
  function loadGames() {
    const gamesGrid = document.getElementById("gamesGrid");
    gamesGrid.innerHTML = "";
  
    games.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("card");
  
      gameCard.innerHTML = `
        <div class="card-header">
          <h3 class="card-title">${game.name}</h3>
          <p class="card-description">Released: ${game.year}</p>
          <p class="play-count">Plays: <span id="playCount-${game.id}">${game.playCount}</span></p>
        </div>
        <div class="card-content">
          <div class="game-preview">
            <span class="icon-gamepad">&#128377;</span>
          </div>
        </div>
        <div class="card-footer">
          <button class="play-button" onclick="playGame('${game.name}')">Play</button>
        </div>
      `;
  
      gamesGrid.appendChild(gameCard);
    });
  }
  
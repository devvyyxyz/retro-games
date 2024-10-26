// searchGames.js

function searchGames() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const gamesGrid = document.getElementById("gamesGrid");
  
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );
  
    gamesGrid.innerHTML = "";
  
    filteredGames.forEach((game) => {
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
  
  document.getElementById("searchInput").addEventListener("input", searchGames);
  
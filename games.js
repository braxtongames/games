// List of games
const games = [
  "1v1.lol",
  "2048",
  "DriveMad",
  "MonkeyMart",
  "AdrenalineChallenge",
  "Asteroids",
  "Astray",
  "Backcountry",
  "BadIceCream",
  "BadIceCream2",
  "BadIceCream3",
  "BasketRandom",
  "Biklife",
  "BounceBack",
  "BoxingRandom",
  "BreakLock",
  "Breakout",
  "CactusMcCoy",
  "CactusMcCoy2",
  "Chess",
  "ChromeDino",
  "Connect3",
  "CubeField",
  "DoodleJump",
  "DuckLife",
  "DuckLife2",
  "DuckLife3",
  "EdgeSurf",
  "EvilClicker",
  "FactoryBallsForever",
  "FlappyBird",
  "GeometryDash",
  "Hextris",
  "JackSmith",
  "Konnect",
  "Minecraft 1.30",
  "Minecraft 1.5.2",
  "Papa's Bakeria",
  "Papa's Burgeria",
  "Papa's Cheeseria",
  "Papa's Cupcakeria",
  "Papa's Donuteria",
  "Papa's Freezeria",
  "Papa's Hot Doggeria",
  "Papa's Pancakeria",
  "Papa's Pastaria",
  "Papa's Pizzeria",
  "Papa's Scooperia",
  "Papa's Sushiria",
  "Papa's Wingeria",
  "Pushback",
  "Racer",
  "RaftWars",
  "RetroBowl",
  "RetroRun",
  "RiddleSchool",
  "RiddleSchool2",
  "RiddleSchool3",
  "RiddleSchool4",
  "RiddleSchool5",
  "Slope",
  "Snake",
  "SnowRider3D",
  "SoccerRandom",
  "SpaceInvaders",
  "Tetris",
  "TheChronoIncident",
  "ThereIsNoGame",
  "TowerMaster",
  "TunnelRush",
  "UnderRun",
  "VolleyRandom",
  "XX142-B2.exe"
];

// Render the game list
const searchInput = document.getElementById('search');
const gameList = document.getElementById('game-list');

function renderGames(filter = "") {
  gameList.innerHTML = "";
  const filteredGames = games.filter(game => game.toLowerCase().includes(filter.toLowerCase()));
  filteredGames.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    gameList.appendChild(li);
  });
}

// Initial render
renderGames();

// Add event listener to search input
searchInput.addEventListener('input', (e) => {
  renderGames(e.target.value);
});

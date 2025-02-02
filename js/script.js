window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game.start();
    console.log("start game");
  }

  window.addEventListener('keydown', (event) => {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    switch (event.keyCode) {
      case left:
        game.player.directionX -= 1;
        break;
      case up:
        game.player.directionY -= 1;
        break;
      case right:
        game.player.directionX += 1;
        break;
      case down:
        game.player.directionY += 1;
        break;
      default:
        break;
    }
  })
};

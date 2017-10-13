window.onload = () => {
  canv = document.getElementById('gameWorld');
  ctx = canv.getContext('2d');
  document.addEventListener('keydown', keyAction);
  setInterval(game, 1000/15);
};

let playerX = 10;
let playerY = 10;
let appleX = 15;
let appleY = 15;
let verocityX = 0;
let verocityY = 0;
const tileSize = 20;
const tileCount = 20;

const snake = [];
let tail = 5;

function game() {
  playerX += verocityX;
  playerY += verocityY;
  if (playerX < 0) {
    playerX = tileCount - 1;
  }
  if (playerX > tileCount - 1) {
    playerX = 0;
  }
  if (playerY < 0) {
    playerY = tileCount - 1;
  }
  if (playerY > tileCount - 1) {
    playerY = 0;
  }
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = '#2ecc71';
  for (var i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize - 2, tileSize - 2);
    if (snake[i].x === playerX && snake[i].y === playerY) {
      tail = 5;
    }
  }
  snake.push({
    x: playerX,
    y: playerY,
  });
  while (snake.length > tail) {
    snake.shift();
  }

  if (appleX === playerX && appleY === playerY) {
    tail++;
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
  }

  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize - 2, tileSize - 2);
}

function keyAction(e) {
  switch (e.keyCode) {
    case 37:
      verocityX = -1;
      verocityY = 0;
      break;
    case 38:
      verocityX = 0;
      verocityY = -1;
      break;
    case 39:
      verocityX = 1;
      verocityY = 0;
      break;
    case 40:
      verocityX = 0;
      verocityY = 1;
      break;
  }
}

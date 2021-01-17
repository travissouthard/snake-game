let rez = 40;
let snake;

function setup() {
  frameRate(2);
  createCanvas(400, 400);
  snake = new Snake();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.vel.x = rez * -1;
    snake.vel.y = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.vel.x = rez;
    snake.vel.y = 0;
  } else if (keyCode === UP_ARROW) {
    snake.vel.x = 0;
    snake.vel.y = rez * -1;
  } else if (keyCode === DOWN_ARROW) {
    snake.vel.x = 0;
    snake.vel.y = rez;
  }
}

function draw() {
  background(0, 100, 100);
  snake.update();
  snake.show();
}
let snake;
let rez = 10;
let timeStep = 10;

class Snake {
    constructor() {
        this.body = [];
        this.body.push(createVector(0, 0))
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update () {
        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;
    }

    show () {
        noStroke();
        fill(255);
        rect(this.body[0].x * rez, this.body[0].y * rez, rez, rez)
    }
}

function setup() {
    createCanvas(400, 400);
    snake = new Snake();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    }
}

function draw() {
    background(220);
    snake.update();
    snake.show();
}
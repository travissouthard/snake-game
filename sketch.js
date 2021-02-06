let snake;
let rez = 10;
let timeStep = 20;

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

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.body.push(head);
    }

    update () {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head)
    }

    show () {
        for (let part of this.body) {
            noStroke();
            fill(255);
            rect(part.x * rez, part.y * rez, rez, rez)
        }
    }
}

function setup() {
    createCanvas(400, 400);
    frameRate(5)
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
    } else if (key == " ") {
        snake.grow();
    }
}

function draw() {
    background(220);
    snake.update();
    snake.show();
}
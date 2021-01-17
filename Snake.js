class Snake {
  constructor () {
    this.loc = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
  }
  
  update() {
    this.loc.add(this.vel);
  }
  
  show () {
    noStroke();
    fill(0, 200, 0);
    rect(this.loc.x, this.loc.y, rez, rez)
  }
}
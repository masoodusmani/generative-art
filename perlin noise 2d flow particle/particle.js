function Particle({ colors = [0, 0, 0] }) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0); //p5.Vector.random2D(); //createVector(0, 0);
  this.acc = createVector(0, 0);
  this.prevPos = this.pos.copy();
  this.colors = colors;

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(maxspeedSlider.value());
    this.updatePrev();
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.updatePrev = function () {
    this.prevPos = this.pos.copy();
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function (modifier) {
    stroke(
      ...this.colors.map((color) => map(color * modifier, 0, 255 * 500, 0, 255))
    );
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    // point(this.pos.x, this.pos.y);
  };

  this.edges = function () {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  };

  this.follow = function (vectors) {
    const x = floor(this.pos.x / scl);
    const y = floor(this.pos.y / scl);
    const index = x + y * cols;
    const force = vectors[index];
    this.applyForce(force);
  };
}

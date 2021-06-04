let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.01;
let start = 0;

function setup() {
  // put setup code here
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw1() {
  // put drawing code here
  background(51);
  // let x = random(width);
  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, width);
  xoff1 += 0.01;
  xoff2 += 0.01;
  ellipse(x, y, 24, 24);
}
function draw1() {
  // put drawing code here
  background(51);
  stroke(255);
  noFill();
  beginShape();
  // let x = random(width);
  let xoff = start;
  for (let x = 0; x <= width; x++) {
    // const y = map(-1, 1, sin(xoff), 0, 1);
    // const y = height / 2 + (sin(xoff) * height) / 2;
    const n = map(noise(xoff), 0, 1, 0, height);
    const s = map(sin(xoff), -1, 1, -50, 50);
    const y = n;
    // const y = noise(xoff) * 100 + height / 2 + (sin(xoff) * height) / 2;
    xoff += inc;
    vertex(x, y);
  }
  endShape();
  start += inc;
  // noLoop();
}

function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y <= height; y++) {
    let xoff = 0;
    for (let x = 0; x <= width; x++) {
      const index = (x + y * width) * 4;
      // const r = random(255);
      // const r = noise(xoff, yoff) * 255;
      const r = random(255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  noLoop();
}

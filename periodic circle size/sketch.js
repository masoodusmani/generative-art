let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.01;
let start = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}
const numFrames = 60;

function draw() {
  background(255);
  // put drawing code here
  drawDots();
}

const periodicFunction = (p) => {
  return map(sin(TWO_PI * p), -1, 1, 2, 8);
};

const offset = (x, y) => {
  return 0.01 * dist(x, y, width, height);
};

const drawDots = () => {
  const m = 40;
  const t = (1.0 * frameCount) / numFrames;
  stroke(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      const x = map(i, 0, m - 1, 0, width);
      const y = map(j, 0, m - 1, 0, height);
      const size = periodicFunction(t - offset(x, y));
      strokeWeight(size);
      point(x, y);
    }
  }
};

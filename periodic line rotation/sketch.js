let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.0;
let start = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  slider = createSlider(0, 1000, 50);
  slider.position(width, 50);
  textSize(15);
}
const numFrames = 60;
let slider;
function draw() {
  background(255);
  text(slider.value(), width - 50, 65);

  // put drawing code here

  noiseSeed(slider.value());
  drawLines();
}

const periodicFunction = (p) => {
  return map(sin(TWO_PI * p), -1, 1, -1, 1);
  // return map(sin(TWO_PI * p), -1, 1, -1, 1);
};

const offset = (x, y) => {
  xoff2 += inc;
  return noise(xoff2) * (x + 2 * y); //0.005 * (x + 2 * y) +
  // return map(noise(x, 2 * y), 0, 1, 0, 10); //* (x + 2 * y) * 0.005;
};

const drawLines = () => {
  const m = 50;
  const t = (1.0 * frameCount) / numFrames;
  stroke(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      const x = map(i, 0, m - 1, 0, width);
      const y = map(j, 0, m - 1, 0, height);
      // const size = periodicFunction(t - offset(x, y));
      // strokeWeight(size);
      push();
      translate(x, y);
      const rot = periodicFunction(t - offset(x, y));
      rotate(rot);
      line(-5, 0, 5, 0);
      pop();
    }
  }
};

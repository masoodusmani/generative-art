let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.1;
let scl = 10;
let cols, rows;
let start = 0;

let fr;
let zoff = 0;

const particles = [];
let flowfield = [];
let maxspeedSlider;
let magnitudeSlider;
let zoffSlider;
const colors = () => {
  roff += 0.1;
  goff += 1;
  boff += 0.1;
  return [
    0,
    // noise(roff) * 128 + 127,
    noise(roff) * 255,
    // 0,
    noise(boff) * 128 + 127,
    // 0,

    // noise(goff) * 128 + 127,
    // 0,
    // noise(boff) * 128 + 127,
    9,
  ];
};
function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  maxspeedSlider = createSlider(0, 8, 4, 0.3);
  maxspeedSlider.position(width, 10);
  maxspeedSlider.style("width", "80px");

  magnitudeSlider = createSlider(0, 5, 1, 0.3);
  magnitudeSlider.position(width, 50);
  magnitudeSlider.style("width", "80px");

  zoffSlider = createSlider(0, 1, 0.004, 0.001);
  zoffSlider.position(width, 100);
  zoffSlider.style("width", "80px");

  flowfield = new Array(rows * cols);

  for (i = 0; i < 500; i++) {
    particles[i] = new Particle({ colors: colors() });
  }
}
// let count = 0;
// function draw() {
//   let yoff = 0;
//   if (count < 6) {
//     // randomSeed(10);
//   } else {
//     noLoop();
//     count = 0;
//   }
//   for (let y = 0; y <= rows; y++) {
//     let xoff = 0;
//     for (let x = 0; x <= cols; x++) {
//       const index = (x + y * width) * 4;
//       // const r = random(255);
//       const r = noise(xoff, yoff) * 255;

//       const v = p5.Vector.fromAngle(random(TWO_PI));
//       // fill(r);
//       // rect(x * scl, y * scl, scl, scl);
//       stroke(0);
//       push();
//       translate(x * scl, y * scl);
//       rotate(v.heading());
//       line(0, 0, scl, 0);
//       pop();
//       xoff += inc;
//     }
//     yoff += inc;
//   }
//   count++;
//   // noLoop();
//   fr.html(floor(frameRate()));
// }

let roff = 10000;
let goff = 20000;
let boff = 30000;
function draw() {
  let yoff = 0;
  randomSeed(10);
  // clear();
  for (let y = 0; y <= rows; y++) {
    let xoff = 0;
    for (let x = 0; x <= cols; x++) {
      const index = x + y * cols;
      // const r = random(255);
      // const r = noise(xoff, yoff) * 255;
      const angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      const v = p5.Vector.fromAngle(angle);
      v.setMag(magnitudeSlider.value());
      flowfield[index] = v;
      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
      // stroke(0, 50);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += zoffSlider.value();

  particles.map((particle, index) => {
    particle.follow(flowfield);
    particle.update();
    particle.show(index);
    particle.edges();
  });
  fr.html(floor(frameRate()));
  // if (stop) noLoop();
}
let stop = false;
function keyReleased() {
  if (key == "p") noLoop();
  if (key == "o") loop();
}

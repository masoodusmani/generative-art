let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.0;
let start = 0;

// var capturer = new CCapture({ format: "webm", framerate: 30 });
let canvas;
var btn;
var counter = 1;
function setup() {
  canvas = createCanvas(500, 500);
  slider = createSlider(0, 1000, 20);
  slider.position(width, 50);
  textSize(15);
  frameRate(60);

  // capturer.start();
  // capturer.start();
}
const numFrames = 60;
let slider;
var startMillis;

function draw() {
  // if (startMillis == null) {
  //   startMillis = millis();
  // }
  // var duration = 60000;
  // var elapsed = millis() - startMillis;
  // var t = map(elapsed, 0, duration, 0, 1);
  // if (t > 1) {
  //   noLoop();
  //   console.log("finished recording.");
  //   capturer.stop();
  //   capturer.save();
  //   return;
  // }

  background(0);
  fill(255);
  text(slider.value(), width - 30, 35);

  // put drawing code here

  noiseSeed(slider.value());
  drawPattern();
}

const periodicFunction = (p, seed, x, y) => {
  const radius = 1.3;
  const scl = 0.018;
  return (
    1.0 *
    noise(
      seed + radius * cos(TWO_PI * p),
      seed + radius * sin(TWO_PI * p),
      // scl * x
      scl * (y + x)
    )
  );
};

const offset = (x, y) => {
  return 0.015 * dist(x, y, width / 3, height / 3.5);
};

const drawPattern = () => {
  const m = 200;
  const t = (1.0 * frameCount) / numFrames;
  stroke(255, 180);
  strokeWeight(1.5);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      const margin = 50;
      const x = map(i, 0, m - 1, margin, width - margin);
      const y = map(j, 0, m - 1, margin, height - margin);

      const dx = 20.0 * periodicFunction(t - offset(x, y), 0, x, y);
      const dy = 20.0 * periodicFunction(t - offset(x, y), 123, x, y);
      // const size = periodicFunction(t - offset(x, y));
      // strokeWeight(size);
      point(x + dx, y + dy);
    }
  }
  // if (frameCount <= numFrames) {
  // capturer.capture(document.getElementById("defaultCanvas0"));
  // }
  // if (frameCount === numFrames) {
  //   console.log("saved!");
  //   capturer.stop();
  //   capturer.save();
  // }
};

function save_record() {
  capturer.save();
}

var capturer = new CCapture({ format: "webm", framerate: 30 });
var btn;
var counter = 1;

function setup() {
  frameRate(30);
  createCanvas(500, 500);
  btn = document.createElement("button");
  btn.textContent = "save recording";
  document.body.appendChild(btn);
  btn.onclick = save_record;

  background(0);
  capturer.start();
}

function draw() {
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  let angle = (frameCount * 4) % 360;
  if (angle == 0) {
    counter++;
  }
  rotate(angle);
  stroke("white");
  noFill();
  rect(30 * counter, 30 * counter, 20, 20);
  capturer.capture(document.getElementById("defaultCanvas0"));
}

function save_record() {
  capturer.save();
}

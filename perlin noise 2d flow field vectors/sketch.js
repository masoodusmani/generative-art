let xoff1 = 0;
let xoff2 = 1000;
let inc = 0.1;
let scl = 10;
let cols, rows;
let start = 0;

let fr;
let zoff = 0;

function setup() {
  // put setup code here
  createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
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

function draw() {
  let yoff = 0;
  randomSeed(10);
  clear();
  for (let y = 0; y <= rows; y++) {
    let xoff = 0;
    for (let x = 0; x <= cols; x++) {
      const index = (x + y * width) * 4;
      // const r = random(255);
      const r = noise(xoff, yoff) * 255;
      const angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      const v = p5.Vector.fromAngle(angle);
      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.004;
  // noLoop();
  fr.html(floor(frameRate()));
}

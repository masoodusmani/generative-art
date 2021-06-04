const tileCount = 20;
let tileWidth, tileHeight;
let shapeAngle = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  tileWidth = width / tileCount;
  tileHeight = height / tileCount;
}

function draw1() {
  // put drawing code here
  clear();

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      const posX = gridX * tileWidth + tileWidth / 2;
      const posY = gridY * tileHeight + tileHeight / 2;
      push();
      translate(posX, posY);
      line(0, 0, 50, 50);
      pop();
    }
  }
}
function draw2() {
  // put drawing code here
  clear();

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      const posX = gridX * tileWidth + tileWidth / 2;
      const posY = gridY * tileHeight + tileHeight / 2;

      const angle = atan2(posY, posX);

      push();
      translate(posX, posY);
      rotate(angle);
      line(0, 0, 50, 50);
      pop();
    }
  }
}

function draw() {
  // put drawing code here
  clear();
  strokeWeight(5);

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      const posX = gridX * tileWidth + tileWidth / 2;
      const posY = gridY * tileHeight + tileHeight / 2;

      const angle =
        atan2(mouseY - posY, mouseX - posX) + (shapeAngle * PI) / 180;

      push();
      translate(posX, posY);
      rotate(angle);
      // line(-12, 0, 12, 0);
      line(-20, -20, 20, 20);
      // line(0, 0, 50, 50);
      pop();
    }
  }
}
function keyReleased() {
  if (keyCode == LEFT_ARROW) shapeAngle += 25;
  if (keyCode == RIGHT_ARROW) shapeAngle -= 20;
}

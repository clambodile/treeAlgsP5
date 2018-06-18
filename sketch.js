let root;

function setup() {
  createCanvas(640, 360);
  root = new Tree(4, 5, 20);
  console.log(root);
}

function draw() {
  root.draw();
}
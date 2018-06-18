// let depth;
// let diameter;
// let arity;
let root;

function setup() {
  // put setup code here
  createCanvas(640, 360);
  root = new Tree(6, 2, 20);
  console.log(root);
}

function draw() {
  // put drawing code here
  root.draw();
}
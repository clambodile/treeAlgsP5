// let depth;
// let diameter;
// let arity;
let root;

function setup() {
  // put setup code here
  createCanvas(1260, 720);
  root = new Tree(5, 2, 20);
  console.log(root);
}

function draw() {
  // put drawing code here
  root.draw();
}
class Tree {
  constructor(tHeight, arity, diameter, x = width / 2, y = diameter, depth = 0,root = this, parent = null) {
    this.tHeight = tHeight;
    this.depth = depth;
    this.arity = arity;
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.children = [];
    this.root = root;
    this.parent = parent;

    if (this.tHeight > 1) {
      for (let i = 0; i < arity; i++) {
        let tHeight = this.tHeight - 1;
        let depth = this.depth + 1;
        let arity = this.arity;
        let diameter = this.diameter
        let xSpacing = width / (arity ** depth + 1);
        let ySpacing = height / this.root.tHeight;
        let x = this.x + i * xSpacing - (xSpacing / 2);
        let y = this.y + ySpacing;
        this.children.push(new Tree(tHeight, arity, diameter, x, y, depth, this.root, this));
      }
    }
  }

  draw() {
    this.children.forEach(child => {
      line(this.x, this.y, child.x, child.y);
      child.draw();
    });
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
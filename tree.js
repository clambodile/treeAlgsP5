class Tree {
  constructor({ tHeight, arity, diameter, x = width / 2, y = diameter, depth = 0, root = this, parent = null, leftBound = diameter, rightBound = width - diameter } = options) {
    this.tHeight = tHeight;
    this.depth = depth;
    this.arity = arity;
    this.diameter = diameter;
    this.x = x;
    this.y = y;
    this.children = [];
    this.root = root;
    this.parent = parent;
    this.leftBound = leftBound;
    this.rightBound = rightBound;
    this.availableWidth = rightBound - leftBound;
    this.fontSize = this.diameter;

    if (this.tHeight > 1) {
      for (let i = 0; i < arity; i++) {
        let tHeight = this.tHeight - 1;
        let depth = this.depth + 1;
        let arity = this.arity;
        //determine x coordinates of nodes
        let columns = arity ** depth;
        let columnWidth = this.root.availableWidth / columns;
        let diameter = this.diameter;
        let leftBound = this.leftBound + i * columnWidth;
        let rightBound = leftBound + columnWidth * arity;
        let x = this.leftBound + i * columnWidth + columnWidth / 2;
        //determine y coordinate
        let ySpacing = height / this.root.tHeight;
        let y = this.y + ySpacing;
        this.children.push(new Tree({ tHeight, arity, diameter, x, y, depth, root: this.root, parent: this, leftBound, rightBound }));
      }
    }
  }

  draw() {
    this.children.forEach(child => {
      if (child) {
        line(this.x, this.y, child.x, child.y);
        child.draw();
      }
    });
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
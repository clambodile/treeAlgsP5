class binarySearchTree extends Tree {
  constructor({ value = 0,depth = 0}) {
    super({ tHeight: 0, arity: 2, diameter: 20, root });
    this.depth = depth;
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = [this.left, this.right];
    this.root.tHeight = Math.max(this.depth, this.root.tHeight);
  }

  insert(n) {
    if (n < this.value) {
      if (this.left) {
        this.left.insert(n);
      } else {
        this.left = new binarySearchTree({ value: n, depth: this.depth + 1, root: this.root });
        this.children[0] = this.left;
      }
    } if (n > this.value) {
      if (this.right) {
        this.right.insert(n);
      } else {
        this.right = new binarySearchTree({ value: n, depth: this.depth + 1, root: this.root });
        this.children[1] = this.right;
      }
    }
    this.draw();
  }

  draw() {
    super.draw();
    this.children.forEach(child => child ? child.draw() : null);
    textSize(this.fontSize);
    text(this.value, this.x - 5, this.y + 7);
  }
}
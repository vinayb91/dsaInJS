class BSTNode {
  constructor(key) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
           this.insertNode(node.left, newNode) 
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
           this.insertNode(node.right, newNode) 
        }    
    }
  }
}

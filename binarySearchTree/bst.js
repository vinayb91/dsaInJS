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

  delete(key){
    this.root = this.deleteNode(this.root, key)
  }

  deleteNode(node, key){
    if (node===null) {
      return null
    }else if(key<node.key){
      node.left = this.deleteNode(node.left, key)
    }else if(key>node.key){
      node.right = this.deleteNode(node.right, key)
    }else{
      if (node.left===null && node.right===null) {
        return null
      }else if(node.left===null){
        return node.right
      }else if(node.right === null){
        return node.left
      }else{
        let tempNode = this.findMinNode(node.right) // 
        node.key=tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key)
      }
    }
    return node
  }
  findMinNode(node){
    while (node.left !==null) {
      node=node.left
    }
    return node
  }

  inOrderTraversal(){
    const result = []
    this.inOrder(this.root, result)
    // console.log("this is root", this.root)

    return result
  }

  inOrder(node, result){
    if (node !==null) {
      this.inOrder(node.left, result)
      result.push(node.key)
      this.inOrder(node.right, result)
      
    }
  }

  preOrderTraversal(){
    const result = []
    this.preOrder(this.root, result)
    // console.log("this is root", this.root)
    return result
  }

  preOrder(node, result){
    if (node !==null) {

      result.push(node.key)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }
  }

  postOrderTraversal(){
    const result = []
    this.postOrder(this.root, result)
    return result
  }

  postOrder(node, result){
    if (node !==null) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.key)
      
    }
  }

  recursiveDFS(root){
    if (root === null) {
      return 
    }
    const leftValues = this.recursiveDFS(root.left)
    const rightValues = this.recursiveDFS(root.right)

    return [root.key, leftValues, rightValues]
  }

  DFS(){
    const result = this.recursiveDFS(this.root)
    // console.log("this is root", this.root)

    return result
  }
  DFSiterative(){
    const result = this.iterativeDFS(this.root)
    // console.log("this is root", this.root)

    return result
  }


  BFS(){
    const result = this.BredthFirstSearch(this.root)
    // console.log("this is root", this.root)

    return result
  }

  BredthFirstSearch(root){
    const values = []
    if (root===null) {
      return values
    }
    const queue = [root]
    while (queue.length>0) {
      const node = queue.shift()
      values.push(node.key)

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return values
  }
  iterativeDFS(root){
    const values = []
    if (root===null) {
      return values
    }
    const stack = [root]
    while (stack.length>0) {
      const node = stack.pop()
      values.push(node.key)

      if (node.right!==null) {
        stack.push(node.right)
      }
      if (node.left!==null) {
        stack.push(node.left)
      }
    }
    return values
  }
}


let mybst = new BinarySearchTree()

mybst.insert(25)
mybst.insert(20)
mybst.insert(15)
mybst.insert(23)
mybst.insert(40)
mybst.insert(50)

// console.log(mybst.inOrderTraversal())
// console.log(mybst.preOrderTraversal())
console.log(mybst.BFS())

// mybst.delete(20)
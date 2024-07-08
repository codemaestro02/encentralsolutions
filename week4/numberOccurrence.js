class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
function createCustomTree() {
// Creating nodes
// first level
    const root = new Node("start");

    // second level
    // left and right branches of the root
    root.left = new Node("child");
    root.right = new Node("steak");

// third level
    // left and right branches of the left branch
    root.left.left = new Node("movie");
    root.left.right = new Node("menu");

    // left and right branches of the right branch
    root.right.left = new Node("map");
    root.right.right = new Node('pizza')

// fourth level
    // left and right branches of the first left branch
    root.left.left.left = new Node("steak");
    root.left.left.right = new Node("child");

    // left and right branches of the first right branch
    root.left.right.left = new Node("pizza");
    root.left.right.right = new Node("steak");

    // left and right branches of the second left branch
    root.right.left.left = new Node("start");
    root.right.left.right = new Node("pizza");

    // left and right branches of the second right branch
    root.right.right.left = new Node("menu");
    root.right.right.right = new Node("steak");

// fifth level
    // left and right branches of the first right branch
    root.left.left.right.left = new Node("map");
    root.left.left.right.right = new Node("menu");

    // left and right branches of the third left branch
    root.right.left.left.left = new Node("child");
    root.right.left.left.right = new Node("steak");

    // left and right branches of the fourth right branch
    root.right.right.right.right = new Node("map");
  
    return root;
}
  
function findWordInTree(root, word) {
    if (root === null) return null;
  
    // Check the current node
    if (root.value === word) return root;
  
    // Recursively search the left subtree
    let leftResult = findWordInTree(root.left, word);
    if (leftResult !== null) return leftResult;
  
    // Recursively search the right subtree
    let rightResult = findWordInTree(root.right, word);
    if (rightResult !== null) return rightResult;
  
    // If the word is not found, return null
    return null;
  }
  
  let rootNode = createCustomTree()
  
  console.log(findWordInTree(rootNode, "menu"))
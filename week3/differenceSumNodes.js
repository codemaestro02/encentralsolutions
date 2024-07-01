class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function levelDifference(root) {
    if (!root) {
        return 0;
    }

    let level1and2Sum = root.data;
    if (root.left) level1and2Sum += root.left.data;
    if (root.right) level1and2Sum += root.right.data;

    let level3and4Sum = 0;
    if (root.left) {
        if (root.left.left) level3and4Sum += root.left.left.data;
        if (root.left.right) level3and4Sum += root.left.right.data;
    }
    if (root.right) {
        if (root.right.left) level3and4Sum += root.right.left.data;
        if (root.right.right) level3and4Sum += root.right.right.data;
    }

    return level1and2Sum - level3and4Sum;
}

// Example case:
const root = new Node(5);
root.left = new Node(4);
root.right = new Node(7);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(5);
root.right.right = new Node(8);
root.left.left.left = new Node(2);
root.left.left.right = new Node(6);
root.left.right.left = new Node(6);
root.left.right.right = new Node(9);
console.log(levelDifference(root)); 
// Output should be -30
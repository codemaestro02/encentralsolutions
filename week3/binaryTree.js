class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function countFullNodes(node) {
    if (!node) {
        return 0;
    }

    let count = 0;
    if (node.left && node.right) {
        count++;
    }

    return count + countFullNodes(node.left) + countFullNodes(node.right);
}

// Example case:

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
console.log(countFullNodes(root)); 
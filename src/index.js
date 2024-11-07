import "./styles.css";

let myArray = [];

class node {
  constructor(data) {
    this.data = data;
    this.one = [];
    this.two = [];
    this.three = [];
    this.four = [];
    this.five = [];
    this.six = [];
    this.seven = [];
    this.eight = [];
  }
}

class tree {
  constructor(position) {
    this.root = buildTree(position);
  }
}

let myTree = new tree([3, 3]);

console.log(myTree);

// Function for building a whole tree

function buildTree(position) {
  let finalArray = [];

  let root = getRoot(finalArray, 0, finalArray.length - 1);

  myArray = finalArray;

  // Getting the root

  function getRoot(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    let midData = arr[mid];

    // Create root node
    let root = new node(midData);

    // Create left subtree
    root.left = getRoot(arr, start, mid - 1);

    // Create right subtree
    root.right = getRoot(arr, mid + 1, end);

    return root;
  }

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log(prettyPrint(myTree.root));

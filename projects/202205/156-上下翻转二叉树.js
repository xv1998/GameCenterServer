/**
 * 题目：上下翻转二叉树，给你一个二叉树的根节点 root ，请你将此二叉树上下翻转，并返回新的根节点。
 * 规则：
 * 原来的左子节点变成新的根节点
 * 原来的根节点变成新的右子节点
 * 原来的右子节点变成新的左子节点
 *
 */

/**
 * 思路：递归到最左边的子节点的root后处理
 */

var upsideDownBinaryTree = function (root) {
  if (root === null) return null;
  if (root.left === null) return root;
  const newRoot = new TreeNode();
  let node = newRoot;
  deep(node, root);
  return newRoot;
};

const deep = (node, root) => {
  if (root.left === null) return node;
  let temp = deep(node, root.left);
  temp.val = root.left.val;
  if (root.right) {
    temp.left = new TreeNode(root.right.val);
  }
  temp.right = new TreeNode(root.val);
  return temp.right;
};

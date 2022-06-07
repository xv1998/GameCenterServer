/**
 * 题目：给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 */

/**
 * 思路：递归
 * 1. 先序遍历是根-左-右，中序遍历找到根节点位置，根节点左边是左子树，右边是右子树
 * 2. stop表示当前构造的树的结束点
 *  a. 对于节点的左子树，结束点为当前节点
 *  b. 对于右子树，结束点为当前节点的父节点，因为右子树遍历完证明以该节点为根节点的树已经遍历完，要回溯到父节点
 * 3. 当inorder[i] === stop时表示已遍历完树的最左或最右叶子，需要返回。
 */

var buildTree = function (preorder, inorder) {
  let pre = 0,
    i = 0;
  const buildTreeHelper = (preorder, inorder, stop) => {
    if (pre === preorder.length) {
      return null;
    }
    if (stop === inorder[i]) {
      i++;
      return null;
    }
    const val = preorder[pre++];
    const node = new TreeNode(val);
    node.left = buildTreeHelper(preorder, inorder, val);
    node.right = buildTreeHelper(preorder, inorder, stop);
    return node;
  };
  return buildTreeHelper(preorder, inorder, -3001);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

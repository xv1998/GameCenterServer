/**
 * 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。
 * 输入：root = [1,3,null,null,2]
 * 输出：[3,1,null,null,2]
 */

/**
 * 思路：中序遍历，因为二叉搜索树是有递增顺序的，只要记录遍历的节点，就知道哪个顺序不对了
 * 1. 需要开辟一个数组来存储遍历的结果，空间复杂度O(H)
 */

const inorder = (root, nums) => {
  if (root === null) {
    return;
  }
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right);
};

const findTwoNode = (nums) => {
  let p = -1,
    q = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      q = i;
      if (p === -1) {
        p = i - 1;
      } else {
        break;
      }
    }
  }
  return [nums[p], nums[q]];
};

const changeTwo = (root, p, q) => {
  if (root !== null) {
    if (root.val === p || root.val === q) {
      root.val = root.val === p ? q : p;
    }
    changeTwo(root.left, p, q);
    changeTwo(root.right, p, q);
  }
};

var recoverTree = function (root) {
  let nums = [];
  inorder(root, nums);
  const [first, second] = findTwoNode(nums);
  if (first && second) {
    changeTwo(root, first, second);
  }
};

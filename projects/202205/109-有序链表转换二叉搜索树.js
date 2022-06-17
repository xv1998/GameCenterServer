/**
 * 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
 * 来源：力扣（LeetCode）
 *
 * 输入: head = [-10,-3,0,5,9]
 * 输出: [0,-3,9,-10,null,5]
 */
/**
 * 思路：递归+快慢指针
 * 1. 重点在于找出区间内中值，为树的根节点
 * 2. 用快慢指针，快指针移动速度是慢指针两倍，保证 0-slow 和 slow-fast 区间数量的差值小于等于1
 * 3. 然后区间递归
 */
var sortedListToBST = function (head) {
  return buildTree(head, null);
};

const buildTree = (head, tail) => {
  if (head == tail) {
    return null;
  }
  let fast = head;
  let slow = head;
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let root = new TreeNode(slow.val);
  root.left = buildTree(head, slow);
  root.right = buildTree(slow.next, tail);
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 题目：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 */
/**
 * 思路：递归到偶数节点然后进行反转操作
 */

var swapPairs = function (head) {
  if (!head) return head;
  return deep(head, 0);
};

const deep = (head, num) => {
  if (head.next === null) {
    return head;
  }
  let node = deep(head.next, num ^ 1);
  if (num === 0) {
    const temp = head.next;
    const next = temp.next;
    temp.next = head;
    head.next = next;
    node = temp;
  } else {
    head.next = node;
    node = head;
  }
  return node;
};

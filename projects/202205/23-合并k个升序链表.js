/**
 * 题目：合并K个升序链表，给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 */

/**
 * 思路：对k个链表归并排序，时间复杂度nlogk，n为所有链表节点的总和
 */

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  else if (lists.length === 1) return lists[0];
  return merge(lists, 0, lists.length - 1);
};

const merge = (lists, left, right) => {
  if (left === right) {
    return lists[left];
  }
  const mid = Math.floor((left + right) / 2);
  const m = merge(lists, left, mid);
  const n = merge(lists, mid + 1, right);
  return mergeTwo(m, n);
};

const mergeTwo = (left, right) => {
  if (!left && !right) {
    return null;
  }
  const root = new ListNode();
  let node = root;
  while (left || right) {
    if (left && right) {
      if (left.val > right.val) {
        node.val = right.val;
        right = right.next;
      } else {
        node.val = left.val;
        left = left.next;
      }
    } else if (left) {
      node.val = left.val;
      left = left.next;
    } else {
      node.val = right.val;
      right = right.next;
    }
    if (left || right) {
      node.next = new ListNode();
      node = node.next;
    }
  }
  return root;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 */

var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) return null;
  const h = new ListNode();
  h.next = head;
  deep(h, n, 0);
  return h.next;
};

const deep = (head, n, m) => {
  if (head.next === null) {
    return m;
  }
  const length = deep(head.next, n, m + 1);
  if (length + 1 - m === n + 1) {
    const next = head.next;
    head.next = next.next;
  } else if (m === 0 && length + 1 - m === n) {
    const next = head.next;
    head.next = null;
    head = next;
  }
  return length;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
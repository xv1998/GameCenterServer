/**
 * 题目：合并两个链表为升序
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;
  let root = new ListNode();
  let node = root;
  while (list1 !== null || list2 !== null) {
    if (list2 !== null && (list1 === null || list1.val > list2.val)) {
      node.val = list2.val;
      list2 = list2.next;
    } else if (list1 !== null && (list2 === null || list1.val <= list2.val)) {
      node.val = list1.val;
      list1 = list1.next;
    }
    if (list1 !== null || list2 !== null) {
      node.next = new ListNode();
      node = node.next;
    }
  }
  return root;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
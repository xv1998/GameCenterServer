/**
 * 题目：至多包含两个不同字符的最长子串，给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。
 *
 * 输入: "ccaabbb"
 * 输出: 5
 * 解释: t 是 "aabbb"，长度为5。
 */
/**
 * 思路：滑动窗口，用一个map去记录扫描的字母个数，right指针去增加，left指针去减少，当个数为1时就删除
 * 1. 当右指针遍历到第三个不同字符时，停止向后查询，到左指针去一步步靠前，直到map里只有一个字符
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 2) return s.length;
  let left = 0;
  let right = 1;
  let max = 2;
  let map = new Map();
  map.set(s[left], 1);
  while (right < s.length) {
    if (map.get(s[right]) || map.size < 2) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      right++;
    } else {
      if (max < right - left) {
        max = right - left;
      }
      if (map.get(s[left]) > 1) {
        map.set(s[left], map.get(s[left]) - 1);
      } else {
        map.delete(s[left]);
      }
      left++;
    }
  }
  if (max < right - left) {
    max = right - left;
  }

  return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));

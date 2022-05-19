/**
 * 题目：至多包含两个不同字符的最长子串，给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。
 *
 * 输入: "ccaabbb"
 * 输出: 5
 * 解释: t 是 "aabbb"，长度为5。
 */

var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 2) return s.length;
  let left = 0;
  let right = 1;
  let max = 2;
  let map = new Map();
  map.set(s[left], 0);
  while (right < s.length) {
    if (map.get(s[right]) !== undefined || (map.size < 2 && s[left] !== s[right])) {
      if (map.size < 2) {
        map.set(s[right], right);
      }
      right++;
    } else {
      if (map.get(s[left + 1]) !== map.get(s[left])) {
        map.delete(s[left]);
      }
      left++;
      console.log(left, right, map);
    }
    if (max < right - left) {
      max = right - left;
    }
  }
  console.log(left, right);
  if (max < right - left) {
    max = right - left;
  }

  return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("abccbbcccaaacaca"));

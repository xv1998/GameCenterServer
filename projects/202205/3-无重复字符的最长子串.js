/**
 * 题目：无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 输入: s = "abcebabb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abce"，所以其长度为 4。
 */

/**
 * 思路1: 滑动窗口，设置左右指针，一开始遍历，左指针不动，右指针向前遍历；当右指针的值已经出现过在窗口内，则将左指针移动到重复值后一位
 *
 * 优化：通过一个 hash 表记录值的下标，每次记录窗口变化值
 */

function getNext(s) {
  let map = {};
  let ans = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= 0) {
      left = Math.max(left, map[s[i]] + 1);
      console.log(left, map[s[i]]);
    }
    ans = Math.max(ans, i - left + 1);
    map[s[i]] = i;
  }
  return ans;
}

const str = "abcbca";
console.log(getNext(str));

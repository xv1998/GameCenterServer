/**
 * 题目：最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * 输入：s = "cadcccbccccaaa"
 * 输出："cccbcccc"
 */

/**
 * 思路：动态规划，当一个回文串去掉两头后还是回文
 * 状态转移方程：dp[i][j] = (s[i] === s[j]) and dp[i+1][j-1];
 */

var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) continue;
    const [left1, right1] = expandAroundCenter(i, i, s);
    const [left2, right2] = expandAroundCenter(i, i + 1, s);
    if (right1 - left1 > end - start) {
      end = right1;
      start = left1;
    }
    if (right2 - left2 > end - start) {
      end = right2;
      start = left2;
    }
  }
  return s.slice(start + 1, end);
};

const expandAroundCenter = (left, right, s) => {
  for (; left >= 0 && right < s.length && s[left] === s[right]; left--, right++) {}
  return [left, right];
};

const str = "ccc";

console.log(longestPalindrome(str));

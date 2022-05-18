/**
 * 题目：最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 */



var longestPalindrome = function (s) {
  let max = 1;
  let mid = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - mid - 1]) {
      
    }
  }
};
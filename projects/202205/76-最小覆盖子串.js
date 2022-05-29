/**
 * 题目：给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 */

/**
 * 思路：
 */

var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let need = {},
    I = 0,
    J = 0,
    missing = t.length;
  for (let i = 0, l = t.length; i < l; i++) {
    let c = t[i];
    need[c] = need[c] === undefined ? 1 : need[c] + 1;
  }
  for (let i = 0, j = 0, l = s.length; j < l; j++) {
    let c = s[j];
    missing -= need[c] > 0;
    need[c] = need[c] === undefined ? -1 : need[c] - 1;
    if (missing === 0) {
      while (i < j && need[s[i]] < 0) {
        need[s[i]]++;
        i++;
      }
      if (J === 0 || j - i < J - I) {
        J = j + 1;
        I = i;
      }
    }
  }
  return s.substring(I, J);
};

console.log(minWindow("ADOBCCODEBANC", "ABC"));

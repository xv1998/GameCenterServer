/**
 * 题目：给定一个字符串 s ，返回 其重新排列组合后可能构成的所有回文字符串，并去除重复的组合 。
 * 你可以按 任意顺序 返回答案。如果 s 不能形成任何回文排列时，则返回一个空列表。
 *
 * 输入: s = "aabb"
 * 输出: ["abba", "baab"]
 */

/**
 * 思路：其实就是回文判断+47全排列
 * 1. 当超过1个奇数字符，就不能构成回文
 * 2. 只用取一半字符来全排列，另一半reverse就行
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  let ob = {};
  let odd_num = 0;
  let mid = "";
  let result = [];
  let _s = "";
  for (let str of s) {
    ob[str] = (ob[str] || 0) + 1;
  }
  const entries = Object.entries(ob);
  entries.forEach(([key, val]) => {
    if (val % 2) {
      odd_num++;
      mid = key;
    }
  });
  if (odd_num > 1) return [];
  if (odd_num === 0) mid = "";
  if (entries.length === 1) return [s];
  ob[mid] && (ob[mid] = ob[mid] - 1);
  Object.entries(ob).forEach(([key, val]) => {
    if (val > 0 && val % 2 === 0) {
      _s += key.repeat(val / 2);
    }
  });
  dfs(result, [..._s], [], _s.length);
  console.log(result, odd_num, ob, _s);
  for (let i = 0; i < result.length; i++) {
    result[i] = reverse(result[i], mid);
  }
  return result;
};

const reverse = (res, mid) => {
  return res + mid + [...res].reverse().join("");
};

const dfs = (result, chars, combine, len) => {
  console.log(combine, chars, len);
  if (combine.length === len) {
    result.push(combine.join(""));
    return;
  }
  for (let i = 0; i < chars.length; i++) {
    if (i === 0 || (i > 0 && chars[i - 1] !== chars[i])) {
      combine.push(chars.splice(i, 1)[0]);
      dfs(result, chars, combine, len);
      chars.splice(i, 0, combine.pop());
    }
  }
};

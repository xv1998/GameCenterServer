/**
 * 题目：括号生成，数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */

/**
 * 思路：两种行为
 * 1. 直接包住
 * 2. 放在左右两边（对于单个的特殊情况视为一种）
 */

var generateParenthesis = function (n) {
  let result = getStr(n, n);
  return result.map((item) => {
    return item.replace(/1/g, "(").replace(/0/g, ")");
  });
};

const getStr = (index, n) => {
  if (index === 1) {
    return ["10"];
  }
  const nextArr = getStr(index - 1, n);
  let arr = [];
  nextArr.forEach((item) => {
    // 包住
    arr.push(`1${item}0`);
    // 左右
    if (item.match(/10/g).length === index - 1) {
      arr.push(`${item}10`);
    } else {
      [`10${item}`, `${item}10`].forEach((item) => arr.push(item));
    }
  });
  return arr;
};

console.log(generateParenthesis(4));

/**
 * dfs
 */

var generateParenthesis = function (n) {
  let result = [];
  const dfs = (left, right, s, n) => {
    if (left > n || right > n || right > left) return;
    if (left === n && n === right) {
      result.push(s);
    }
    dfs(left + 1, right, s + "(", n);
    dfs(left, right + 1, s + ")", n);
  };
  dfs(0, 0, "", n);
  return result;
};

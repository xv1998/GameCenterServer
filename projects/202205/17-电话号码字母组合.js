/**
 * 题目：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。给出数字到字母的映射与电话按键相同
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 */

/**
 * 思路：维护一个队列，遍历到下一个电话号码时就pop出来，然后循环当前电话号码字符串组和队列里面的字符拼在一起，将新字符push进队列里，
 */

var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let que = [""];
  for (let i of digits) {
    const length = que.length;
    for (let m = 0; m < length; m++) {
      let num = que.shift();
      for (let j of letters[Number(i) - 2]) {
        que.push(num + j);
      }
    }
  }

  return que;
};

console.log(letterCombinations("23"));

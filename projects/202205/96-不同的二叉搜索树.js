/**
 * 题目：给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 输入：3
 * 输出：5
 */

/**
 * 思路：动态规划
 */

var numTrees = function (n) {
  if (n === 1 || n === 2) return n;
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

console.log(numTrees(3));

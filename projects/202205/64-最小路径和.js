/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 */
/**
 * 思路：动态规划
 * 1. dp[i][j]存储的是到达当前位置的最短路径
 * 2. 时间复杂度O(m x n)，即遍历完所有格子
 */

var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j !== 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j];
      } else {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

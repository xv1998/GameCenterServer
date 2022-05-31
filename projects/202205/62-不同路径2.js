/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 */
/**
 * 思路；动态规划
 * 1. 由于i行的状态依赖i-1行，所以可以利用滚动数组
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  let f = new Array(m).fill(0);
  f[0] = Number(obstacleGrid[0][0] === 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        f[j] = 0;
        continue;
      }
      if (j - 1 >= 0 && obstacleGrid[i][j] === 0) {
        f[j] += f[j - 1];
      }
    }
  }
  return f[m - 1];
};

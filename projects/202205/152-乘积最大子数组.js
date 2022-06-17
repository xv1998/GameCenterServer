/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 * 输入: nums = [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 */

/**
 * 思路：动态规划
 * 1. 因为存在负数，会让一个数突然变小或变大，所以需要一个变量存储每次变化的最小值
 * 2. 变量 imax 为当前遍历下对比 imax*nums[i] 和 nums[i] 的最大值
 * 3. 最后再将 imax 和 max 取最大值
 */

var maxProduct = function (nums) {
  let max = nums[0];
  let imax = 1,
    imin = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      let temp = imax;
      imax = imin;
      imin = temp;
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    max = Math.max(imax, max);
  }
  return max;
};

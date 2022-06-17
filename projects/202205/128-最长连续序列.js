/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 来源：力扣（LeetCode）
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 */

/**
 * 思路：hash
 * 1. key 用来存储数字，value 用来存储当前数字最长连续区间长度
 * 2. 如遍历到 100，则 97 98 99 x 101 102 中，99 和 101 分别是左边和右边的连续区间端点，两个区间加起来就是一个大的连续区间，然后更新最新长度的端点值即可
 * 3. 如果遍历过的数字直接跳过
 */

var longestConsecutive = function (nums) {
  const hash = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!hash[num]) {
      let left = hash[num - 1] || 0;
      let right = hash[num + 1] || 0;

      let length = left + right + 1;
      hash[num] = length;
      hash[num + right] = length;
      hash[num - left] = length;
      max = Math.max(max, length);
    }
  }
  return max;
};

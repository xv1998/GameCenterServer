/**
 * 题目：给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。返回这三个数的和。
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */

/**
 * 思路和上一题差不多
 */

var threeSumClosest = function (nums, target) {
  if (nums.length === 3) return nums.reduce((a, b) => a + b, 0);
  const arr = nums.sort((a, b) => a - b);
  let result = -10000;
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    const num1 = arr[i];
    const res = target - num1;
    while (left < right) {
      if (arr[left] + arr[right] + num1 === target) {
        result = target;
        break;
      }
      result =
        Math.abs(result - target) > Math.abs(arr[left] + arr[right] + num1 - target)
          ? arr[left] + arr[right] + num1
          : result;
      if (arr[left] + arr[right] < res) {
        left++;
      } else if (arr[left] + arr[right] > res) {
        right--;
      }
    }
  }
  return result;
};

/**
 * 题目：给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）
 */

/**
 * 思路：双指针
 * 1. 左右指针向中间遍历查找左右两边最高的柱子
 * 2. 当发现左指针的柱子比左边最高柱矮，证明有高度差，通过取左右最高柱的最小值作为接水高度
 * 3. 同理右指针，当左右指针相遇时，遍历结束
 */

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[0];
  let rigthMax = height[height.length - 1];
  let result = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
    } else {
      right--;
      rigthMax = Math.max(rigthMax, height[right]);
    }
    if (height[left] < leftMax && leftMax <= rigthMax) {
      // 左右有高度差，取高度最小的柱子
      result += leftMax - height[left];
    }
    if (height[right] < rigthMax && rigthMax <= leftMax) {
      result += rigthMax - height[right];
    }
  }
  return result;
};

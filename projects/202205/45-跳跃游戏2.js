/**
 * 题目：跳跃游戏 II
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 假设你总是可以到达数组的最后一个位置。
 *
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 */

/**
 * 思路：每一次跳跃，记录可以到达的最远距离，在点p到最远距离之间跳都只要一步，去遍历中间的节点，更新可以到达的最远距离
 */

var jump = function (nums) {
  let step = 0;
  let end = 1;
  let start = 0;
  while (end < nums.length) {
    let maxPos = 0;
    for (let i = start; i < end; i++) {
      maxPos = Math.max(maxPos, nums[i] + i);
    }
    start = end;
    end = maxPos + 1;
    step++;
  }

  return step;
};

console.log(jump([2, 3, 1, 1, 4]));

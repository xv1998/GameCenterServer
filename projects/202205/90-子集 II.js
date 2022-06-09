/**
 * 题目：给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 来源：力扣（LeetCode）
 *
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 */

/**
 * 思路：回溯，难点在于过滤重复子集
 * 1. 遍历 nums 数组，当 nums[i] !== nums[i - 1] 即当前数字和上一个重复，它们推算出来的集合也会有重复，所以要过滤
 * 2. 通过传入 start 来不断缩小遍历范围，combine 来存储遍历过的数字
 */

var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  dfs(result, [], nums, 0);
  return result;
};

const dfs = (result, combine, nums, start) => {
  result.push([...combine]);
  if (start === nums.length) return;
  for (let i = start; i < nums.length; i++) {
    if (i === start || nums[i] !== nums[i - 1]) {
      combine.push(nums[i]);
      dfs(result, combine, nums, i + 1);
      combine.pop();
    }
  }
};

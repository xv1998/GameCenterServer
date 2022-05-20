/**
 * 题目：缺失的区间，给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。
 *
 * 输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
 * 输出: ["2", "4->49", "51->74", "76->99"]
 */

var findMissingRanges = function (nums, lower, upper) {
  let ans = [];

  // 添加前后边界在后面遍历统一处理
  nums.unshift(lower - 1);
  nums.push(upper + 1);

  let len = nums.length;

  for (let i = 1; i < len; i++) {
    // 相邻数字相差大于1，说明存在缺失区间
    if (nums[i] - nums[i - 1] > 1) {
      addAns(nums[i - 1], nums[i]);
    }
  }

  // 根据边界添加结果
  function addAns(left, right) {
    // 区间只有一个数，1，3，区间只有2
    // 区分格式添加
    if (right - left === 2) {
      ans.push(left + 1 + "");
    } else {
      ans.push(`${left + 1}->${right - 1}`);
    }
  }

  return ans;
};

console.log(findMissingRanges([]));

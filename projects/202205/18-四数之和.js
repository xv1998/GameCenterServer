/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 * 1. 0 <= a, b, c, d < n
 * 2. a、b、c 和 d 互不相同
 * 3. nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */

/**
 * 思路：排序nums，和题15差不多，但是需要捆绑两个，然后范围搜索使用双指针
 */

var fourSum = function (nums, target) {
  let arr = nums.sort((a, b) => a - b);
  let result = [];
  if (nums.length < 4) return [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i && arr[i - 1] === arr[i]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j !== i + 1 && arr[j - 1] === arr[j]) continue;
      let _target = target - arr[i] - arr[j];
      let list = [];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum < _target || (left !== j + 1 && arr[left - 1] === arr[left])) {
          left++;
        } else if (sum > _target || (right !== nums.length - 1 && arr[right + 1] === arr[right])) {
          right--;
        } else {
          list.push([arr[left], arr[right]]);
          left++;
        }
      }
      result.push(...list.map((item) => item.concat([arr[i], arr[j]])));
    }
  }
  return result;
};

console.log(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7));

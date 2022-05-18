/**
 * 题目：三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

/**
 * 难点：去除重复解
 * 思路：
 * 排序好：[-4,-1,-1,0,1,2]
 * 1. nums[i] > 0: 因为后面已经排序好，所以正数相加不可能等于0，直接返回结果
 * 2. 
 */
var threeSum = function(nums = []) {
  if(nums.length < 3)return [];
  let result = [];
  const arr = nums.sort((a,b)=> {
    return a - b;
  });
  let map = new Map();
  for(let i = 0; i < arr.length; i++){
    if(map.get(arr[i])) continue;
    if(arr[i] > 0) break;
    let left = i+1;
    let right = arr.length - 1;
    const rest = 0 - arr[i];
    while(left < right){
      if(arr[left] + arr[right] < rest){
        left++;
      }
      else if(arr[left] + arr[right] > rest){
        right--;
      }else if(arr[left] + arr[right] === rest){
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
    }
    map.set(arr[i], true);
  }
  return result;
}

console.log(threeSum([-2,0,0,2,2]))
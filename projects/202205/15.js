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
 * 2. 当双指针遇到了和上一次一样的数字，证明之前已经验证过了，直接往中间挪
 * 3. 当两指针值加起来小于剩余值，证明左指针太小了，left++，同理右边
 */
var threeSum = function(nums = []) {
  if(nums.length < 3)return [];
  let result = [];
  const arr = nums.sort((a,b)=> {
    return a - b;
  });
  let map = new Map();
  for(let i = 0; arr[i] <= 0; i++){
    if(i && arr[i-1] === arr[i]) continue;
    let left = i+1;
    let right = arr.length - 1;
    const rest = 0 - arr[i];
    while(left < right){
      if((left !== i+1 && arr[left-1] === arr[left]) || arr[left] + arr[right] < rest){
        left++;
      }
      else if(arr[right+1] === arr[right] || arr[left] + arr[right] > rest){
        right--;
      }else if(arr[left] + arr[right] === rest){
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-2,0,0,2,2]))
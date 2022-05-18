/**
 * 题目：盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 */

/**
 * 思路：设置双指针向中间遍历，对比指针的高度，较小的往中间靠，找高度最高的柱子并计算面积
 */

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while(left !== right){
    const maxH = Math.min(height[left], height[right]);
    if((right - left)*maxH > max){
      max = (right - left)*maxH;
    }
    if(height[left] > height[right]){
      right--;
    }else{
      left++;
    }
  }
  return max;
};
console.log(maxArea([1,1]))
/**
 * 假设你有一个长度为 n 的数组，初始情况下所有的数字均为 0，你将会被给出 k​​​​​​​ 个更新的操作。
 * 其中，每个操作会被表示为一个三元组：[startIndex, endIndex, inc]，你需要将子数组 A[startIndex ... endIndex]（包括 startIndex 和 endIndex）增加 inc。
 * 请你返回 k 次操作后的数组。
 *
 * 输入: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
 * 输出: [-2,0,3,5,3]
 */

/**
 *  思路：差分数组
 * 1. 如果有a2比a1大5，则有a2=a1+5。所以只要记录区间的起止位置和相邻元素的差值即可
 * 2. 判断startIndex比前一个元素差多少
 * 3. 判断lastIndex+1个元素比lastIndex差多少
 * 4. 最后遍历相加即可得到终值
 */

var getModifiedArray = function (length, updates) {
  let arr = new Array(length).fill(0);
  for (let i = 0; i < updates.length; i++) {
    arr[updates[i][0]] += updates[i][2];
    if (updates[i][1] + 1 < length) arr[updates[i][1] + 1] -= updates[i][2];
  }
  for (let i = 1; i < length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
};

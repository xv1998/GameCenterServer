/**
 * 题目：整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 */

/**
 * 思路：转换成字符串无上限
 */

var reverse = function (x) {
  const max = 2147483648;
  let start = 0;
  if(x < 0){
    start = 1;
  }
  const temp = String(x).slice(start);
  let s = '';
  for(let i = temp.length - 1; i >= 0 ;i--){
    s += temp[i];
  }
  if(start && Number(s) > max - 1 || (!start && Number(s) > max)){
    return 0;
  }
  return Number(`${start ? '-': ''}${s}`)
};

console.log(reverse(123))
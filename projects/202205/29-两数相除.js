/**
 * 题目：给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
 */

/**
 * 思路：将除数循环相加，直到小于被除数，然后递归减剩下的值。
 * 注意处理边界问题
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) {
    if ((dividend < 0 && dividend > Math.pow(-2, 31) + 1) || (dividend > 0 && dividend < Math.pow(2, 31)))
      return -dividend;
    else return dividend > 0 ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  }
  let result = 0;
  if (Math.sign(dividend) + Math.sign(divisor) === 0) {
    result = -div(Math.abs(dividend), Math.abs(divisor));
  } else {
    result = div(Math.abs(dividend), Math.abs(divisor));
  }
  return Math.sign(result)
    ? result > Math.pow(2, 31) - 1
      ? Math.pow(2, 31) - 1
      : result
    : result < Math.pow(-2, 31)
    ? Math.pow(-2, 31)
    : result;
};

const div = (dividend, divisor) => {
  if (dividend < divisor) return 0;
  if (dividend < divisor + divisor) return 1;
  let result = 1;
  let temp = divisor;
  while (dividend >= divisor + divisor) {
    divisor += divisor;
    result += result;
  }
  return result + div(dividend - divisor, temp);
};

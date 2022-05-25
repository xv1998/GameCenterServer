var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1) return divisor;
  if (divisor === -1) {
    if ((dividend < 0 && dividend > Math.pow(-2, 31) + 1) || (dividend > 0 && dividend < Math.pow(2, 31)))
      return -dividend;
    else return dividend > 0 ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  }
  if (Math.sign(dividend) + Math.sign(divisor) === 0) {
    return -div(Math.abs(dividend), Math.abs(divisor));
  }
  return div(dividend, divisor);
};

const div = (dividend, divisor) => {
  if (dividend < divisor + divisor) return 1;
  let result = 0;
  let temp = divisor;
  while (dividend >= divisor) {
    divisor += divisor;
    result++;
  }
  return result + div(dividend - divisor + temp, temp);
};

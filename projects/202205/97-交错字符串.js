/**
 * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
 * 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| <= 1
 * 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
 * 注意：a + b 意味着字符串 a 和 b 连接。
 *
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出：true
 *
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出：false
 */
/**
 * 思路：动态规划
 * 对于s1前i和s2前j交错可形成s3长度为i+j的字符串，所以有
 * 1. f(i, j) = f(i - 1, j) && s1[i - 1] === s3[i + j - 1]
 * 2. 同理j
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  else if (s1.length + s2.length + s3.length === 0) return true;
  let arr = Array.of(true);
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      let p = i + j - 1;
      if (i > 0) {
        arr[j] &= s3[p] === s1[i - 1];
      }
      if (j > 0) {
        arr[j] |= arr[j - 1] && s3[p] === s2[j - 1];
      }
    }
  }
  return arr[s2.length];
};

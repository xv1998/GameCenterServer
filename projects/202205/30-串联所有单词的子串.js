/**
 * 题目：给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 */

/**
 * 思路：利用滑动窗口，由于固定了words字符串大小，所以长度len里面的每个字符都可以作为遍历的起始位置
 * 1. 利用 hashMap 去存储 words 出现过的单词数量，在遍历的时候去匹配
 * 2. 匹配上，且数量小于等于 hashMap 时，证明符合条件，让右指针继续往后移动 len 长度；
 * 3. 匹配不上，则证明 right 前面的字符串不合符，移动 left 指针到 right 处重新计数
 * 由于 s 里面每个字符都被 right 指针遍历了一次，所以时间复杂度为 O(n)。
 */

var findSubstring = function (s, words) {
  let map = new Map();
  let res = [];
  for (let str of words) {
    if (s.indexOf(str) === -1) {
      return res;
    }
    // 计算word出现的次数
    map.set(str, (map.get(str) || 0) + 1);
  }
  let len = words[0].length;
  let left = 0;
  let right = 0;
  let hasMap = new Map();
  let count = 0;
  for (let i = 0; i < len; i++) {
    left = i;
    right = i;
    // 滑动窗口
    while (right <= s.length) {
      let str = s.substr(right, len);
      right += len;
      console.log(str);
      if (map.get(str)) {
        hasMap.set(str, (hasMap.get(str) || 0) + 1);
        count++;
        if (hasMap.get(str) > map.get(str)) {
          while (hasMap.get(str) > map.get(str)) {
            let dum_str = s.substr(left, len);
            left += len;
            count--;
            hasMap.set(dum_str, hasMap.get(dum_str) - 1);
          }
        }
        if (count === words.length) {
          res.push(left);
          let str = s.substr(left, len);
          left += len;
          count--;
          hasMap.set(str, hasMap.get(str) - 1);
        }
      } else {
        // 当不存在时，证明right当前字符串不符合，left移到right的位置；
        left = right;
        hasMap.clear();
        count = 0;
      }
    }
  }
  return res;
};

console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]));

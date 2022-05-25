var findSubstring = function (s, words) {
  let size = words[0].length;
  let map = new Map();
  let result = [];
  for (let i = size; i < s.length; ) {
    if (words.includes(s.substr(i - size, i - 1))) {
      if (map.get(s.substr(i - size, i - 1))) {
        map.clear();
      }
      map.set(s.substr(i - size, i - 1), true);
      i += size;
    }
  }
};

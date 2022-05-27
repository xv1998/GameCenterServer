function extendDeeply(pre, _cur) {
  let cur = _cur || {};
  for (let item in pre) {
    if (typeof pre[item] === "object") {
      cur[item] = Array.isArray(pre[item]) ? [] : {};
      extendDeeply(pre[item], cur[item]);
    } else {
      cur[item] = pre[item];
    }
  }
}

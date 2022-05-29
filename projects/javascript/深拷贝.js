/**
 * 简单版本
 * @param {*} pre
 * @param {*} _cur
 */
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

/**
 * 完全版本
 */
const isComplexDataType = (obj) => (typeof obj === "object" || typeof obj === "function") && obj !== null;

function deepClone(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    return new Date(obj); // 日期对象直接返回一个新的日期对象
  }
  if (obj.constructor === RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  const allPros = Object.getOwnPropertyDescriptors(obj);

  const cloneObj = Object.create(Object.getPrototypeOf(obj), allPros);

  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] === "function" ? deepClone(obj[key], hash) : obj[key];
  }
  return cloneObj;
}

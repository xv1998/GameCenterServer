// Call
Function.prototype.myCall = function (context = window) {
  const key = Symbol("key");
  context[key] = this;
  // 将 context 后面的参数取出来
  const args = [...arguments].slice(1);
  const result = context[key](...args);
  delete context[key];
  return result;
};

// Apply
Function.prototype.myApply = function (context = window, ...args) {
  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

// Bind
Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function Fn() {
    if (this instanceof Fn) {
      // 直接作为构造函数（当使用 new 操作符调用绑定函数时，bind 的第一个参数无效。）
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};

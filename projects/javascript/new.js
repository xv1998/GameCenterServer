const myNew = (fn, ...args) => {
  if (typeof fn !== "function") {
    throw "fn must be a function";
  }
  const ob = Object.create(fn.prototype);
  const res = fn.call(ob, ...args);
  return res instanceof Object ? res : ob;
};

function demo(name) {
  this.name = name;
}
demo.prototype.callName = function () {
  console.log(this.name);
};

let b = myNew(demo, "bb");
b.callName();

function toUpperCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map((el) => {
      return toUpperCase(el);
    });
  } else if (Object.prototype.toString.call(obj) === "[object Object]") {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      let str = key.replace(/^[a-z]/i, (s) => s.toUpperCase());
      newObj[str] = toUpperCase(obj[key]);
    });
    return newObj;
  } else return obj;
}

console.log(
  toUpperCase({ 我hyKey: "myValue", q23: "123", arr: [{ name: "123" }, 2, 3], obj: { name: "zzw" }, null: null })
);

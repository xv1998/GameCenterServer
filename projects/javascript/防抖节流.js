/**
 * 防抖：事件在规定时间后触发，在规定时间内触发，则重新计时
 */

const debounce = (fn, delay) => {
  let clock = 0;
  return (args) => {
    const _this = this;
    if (clock) clearTimeout(clock);
    clock = setTimeout(() => {
      fn.apply(_this, args);
      clock = 0;
    }, delay);
  };
};

/**
 * 节流：每隔一段时间执行一次事件
 */

const throttle = (
  fn,
  delay,
  options = {
    leading: true, // 节流开始前执行一次
  }
) => {
  let clock = 0;
  let leading = options.leading;

  const _throttle = function (...args) {
    if (leading) {
      fn(...args);
      leading = false;
    } else {
      if (clock) return;
      if (!clock) {
        clock = setTimeout(() => {
          leading = true;
          fn(...args);
          close();
        }, delay);
      }
    }
  };

  const close = function () {
    if (clock) {
      clearTimeout(clock);
      clock = 0;
    }
  };

  _throttle.cancel = close;
  return _throttle;
};

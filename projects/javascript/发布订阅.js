/**
 * 发布订阅模式
 * 无需知道观察这是谁
 */
class Dep {
  constructor() {
    this.subs = [];
  }
  addSubs(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  notify() {
    this.subs.forEach((sub) => sub.update());
  }
}

class Watcher {
  update() {
    console.log("update");
  }
}

/**
 * 观察者模式
 */
class EventEmitter {
  constructor() {
    this.sub = {};
  }

  $emit(eventType) {
    if (this.subs[eventType]) {
      this.subs[eventType].forEach((v) => v());
    }
  }

  $on(eventType, fn) {
    this.sub[eventType] = this.sub[eventType] || [];
    this.sub[eventType].push(fn);
  }
}

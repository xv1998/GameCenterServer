let Vue;

class Vuex {
  constructor(options) {
    this._vm = new Vue({
      data: {
        $$state: options.state,
      },
    });
    this._mutations = options.mutations;
    this._actions = options.actions;

    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  get state() {
    return this._vm.data.$$state;
  }

  set state(val) {
    throw new Error("不能直接赋值呀，请换别的方式！！天王盖地虎！");
  }

  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      console.error("未知mutaion类型");
      return;
    }

    entry(this.state, payload);
  }
  dispatch(type, payload) {
    const entry = this._actions[type];

    if (!entry) {
      console.error("未知action类型");
      return;
    }
    entry(this, payload);
  }
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

// export default { Store, install }

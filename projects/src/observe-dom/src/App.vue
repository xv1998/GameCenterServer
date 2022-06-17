<template>
  <div id="app">
    <div ref="container" class="container" :style="{height: `${height * 100}px`}">
      <div class="item" v-for="item in list" :key="item">
        {{ item }}
      </div>
    </div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [],
      observer: null,
      height: 1
    };
  },
  mounted() {
    for (let i = 0; i < 5; i++) this.list.push(i);
    this.observer = new MutationObserver((list) => {
      console.log(list);
    });
    this.observer.observe(this.$refs.container, {
      attributes: true,
    });
  },
  methods: {
    handleClick() {
      const len = this.list.length;
      for (let i = 0; i < 5; i++) this.list.push(i + len);
      this.height++;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100px;
  background: palegoldenrod;
  transition: all 0.1s linear;
}
.item {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 60px;
  height: 100px;
  line-height: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

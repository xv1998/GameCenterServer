<template>
  <ul class="container" ref="container" @scroll="handleScroll">
    <li class="container__scroll-runway" :style="{ transform: `translateY(${scrollEnd}px)` }"></li>
    <place-holder
      class="container__placeholder"
      v-for="(item, index) in upPlaceholder"
      :key="-index - 1"
      :style="{ transform: `translateY(${FIXED_HEIGHT * (firstAttachedItem - index - 1)}px)` }"
    />
    <listItem
      class="container__item"
      v-for="item in visibleData"
      :data="item"
      :index="item.index"
      :style="{ transform: `translateY(${item.scrollY}px)` }"
      :key="item.username + item.phone"
    />
    <place-holder
      class="container__placeholder"
      v-for="(item, index) in downPlaceholder"
      :key="index + 1"
      :style="{ transform: `translateY(${FIXED_HEIGHT * (lastAttachedItem + index + 1)}px)` }"
    />
  </ul>
</template>

<script>
import listItem from "../components/listItem";
import PlaceHolder from "../components/placeholder";
import { fetchData } from "../api";

const FIXED_HEIGHT = Number(getComputedStyle(window.document.documentElement)["fontSize"].slice(0, 2)) * 18; // 元素固定高度
const BUFFER_SIZE = 3; // 缓冲个数
const PLACEHOLDER_COUNT = 3;
let VISIBLE_COUNT = BUFFER_SIZE * 2; // 可视区域可展示元素个数

export default {
  name: "FixHeight",
  components: {
    listItem,
    PlaceHolder,
  },
  data() {
    return {
      FIXED_HEIGHT,
      listData: [],
      visibleData: [],
      scrolling: false,
      lastScrollTop: 0, // 上次页面滚动位置
      scrollEnd: 0, // 整个列表高度
      firstAttachedItem: 0, // 「头挂载元素」
      lastAttachedItem: 0, // 「尾挂载元素」
      upPlaceholder: 0,
      downPlaceholder: 0,
      anchorItem: {
        // 锚点元素
        index: 0,
        offset: 0,
      },
    };
  },
  mounted() {
    VISIBLE_COUNT = Math.ceil(this.$refs.container.offsetHeight / FIXED_HEIGHT);
    this.lastAttachedItem = VISIBLE_COUNT + BUFFER_SIZE;
    this.fetchData(); 
    this.visibleData = this.listData.slice(this.firstAttachedItem, this.lastAttachedItem);
  },
  methods: {
    // 获取每个元素的下标
    setIndex(list) {
      const lastIndex = this.listData.length;
      return list.map((item, index) => {
        item.index = lastIndex + index;
        item.scrollY = this.scrollEnd + index * FIXED_HEIGHT;
        Object.freeze(item);
        return item;
      });
    },
    handleScroll(e) {
      if (this.scrolling) return;
      this.scrolling = true;
      requestAnimationFrame(() => {
        this.scrolling = false;
      });
      const detaY = e.target.scrollTop - this.lastScrollTop; // 当前滚动偏移量
      this.lastScrollTop = e.target.scrollTop;
      this.anchorItem.offset += detaY;
      if (detaY >= 0) {
        // 向下滑
        if (this.anchorItem.offset >= FIXED_HEIGHT) {
          // 移动大于等于一个元素
          this.updateAnchorItem();
        }
        if (this.anchorItem.index - this.firstAttachedItem >= BUFFER_SIZE) {
          this.firstAttachedItem = Math.min(this.listData.length - VISIBLE_COUNT, this.anchorItem.index - BUFFER_SIZE);
        }
      } else {
        // 向上滑
        if (e.target.scrollTop <= 0) {
          this.anchorItem = { index: 0, offset: 0 };
        } else if (this.anchorItem.offset < 0) {
          // 回到顶部 / 向上滚动位移超过一个元素
          this.updateAnchorItem();
        }
        if (this.anchorItem.index - this.firstAttachedItem < BUFFER_SIZE) {
          this.firstAttachedItem = Math.max(0, this.anchorItem.index - BUFFER_SIZE);
        }
      }
      this.lastAttachedItem = Math.min(this.firstAttachedItem + VISIBLE_COUNT + BUFFER_SIZE * 2, this.listData.length);
      this.visibleData = this.listData.slice(this.firstAttachedItem, this.lastAttachedItem);

      console.log(this.$refs.container.scrollTop, e.target.scrollTop, this.anchorItem.index, this.firstAttachedItem, this.lastAttachedItem);
      this.updatePlaceholder(detaY >= 0);
      this.handleMore();
    },
    updatePlaceholder(isPositive) {
      if (isPositive) {
        this.upPlaceholder = 0;
        this.downPlaceholder = Math.min(PLACEHOLDER_COUNT, this.listData.length - this.lastAttachedItem);
      } else {
        this.upPlaceholder = Math.min(PLACEHOLDER_COUNT, this.firstAttachedItem);
        this.downPlaceholder = 0;
      }
    },
    updateAnchorItem() {
      const index = Math.floor(this.$refs.container.scrollTop / FIXED_HEIGHT);
      const offset = this.$refs.container.scrollTop - index * FIXED_HEIGHT;
      this.anchorItem = { index, offset };
    },
    fetchData() {
      this.listData.push(...this.setIndex(fetchData()));
      this.scrollEnd = this.listData.length * FIXED_HEIGHT;
    },
    handleMore() {
      const scrollEnd = this.$refs.container.scrollTop + this.$refs.container.offsetHeight;
      scrollEnd >= this.scrollEnd && this.fetchData();
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
  position: absolute;
  contain: layout;
  will-change: transform;
  background-color: #eee;
  &__item,
  &__placeholder {
    position: absolute;
    contain: layout;
    will-change: transform;
  }
  &__scroll-runway {
    position: absolute;
    width: 1px;
    height: 1px;
    transition: transform 0.2s;
  }
}
</style>
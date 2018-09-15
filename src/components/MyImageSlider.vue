<template>
  <div class="MyImageSlider">
    <div :style="{left: selectedIndex * -100 + '%'}">
      <slot></slot>
    </div>
    <div>
      <div
        v-for="(item, index) in items"
        class="MyImageSlider_Selector"
        :class="selectedIndex == index && 'Selected'"
        :key="index"
        v-on:click="selectIndex(index)"
      >
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyImageSlider",
  props: ["src"],
  data: () => ({
    items: [],
    selectedIndex: 0,
    intervalID: undefined,
  }),
  methods: {
    selectIndex(index) {
      this.intervalID && clearInterval(this.intervalID);
      this.selectedIndex = index;
    },
  },
  mounted() {
    this.items = (
      this.$slots.default
        .filter(x => x.elm instanceof HTMLElement)
    );

    this.intervalID = setInterval(
      () => {
        this.selectedIndex = (
          this.selectedIndex >= this.items.length - 1 ? 0
            : this.selectedIndex + 1
        );
      },
      3500,
    );
  },
  destroyed() {
    this.intervalID && clearInterval(this.intervalID);
  },
};
</script>

<style scoped>
.MyImageSlider {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.MyImageSlider > :nth-child(1) {
  display: flex;
  position: relative;
  transition: all .5s ease-in-out;
}

.MyImageSlider > :nth-child(1) > * {
  min-width: 100%;
}

.MyImageSlider > :nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
}

.MyImageSlider_Selector {
  padding: .5rem .5rem;
  margin: 0 .5rem;
  cursor: pointer;
}

.MyImageSlider_Selector > * {
  height: 1.5rem;
  width: .15rem;
  background: #bbb;
  transition: all .3s ease-out;
}

.MyImageSlider_Selector.Selected > * {
  height: 3rem;
  width: .2rem;
  background: #333;
}

.MyImageSlider_Selector.Selected:hover > * {
  background: #333;
}
</style>

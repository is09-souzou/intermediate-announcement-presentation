<template>
  <div class="MyImage">
    <img :src="src" :style="{objectFit: cover ? 'cover' : 'scale-down'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyImage",
  props: ["src", "cover"],
};
</script>

<style scoped>
.MyImage {
  position: relative;
  display: flex;
}

.MyImage > :first-child {
  width: 100%;
  height: 100%;
}

.MyImage > :nth-child(2) {
  position: absolute;
}

.MyImage[float] > img {
  -webkit-filter: drop-shadow(2px 2px 1px #ccc);
}
</style>

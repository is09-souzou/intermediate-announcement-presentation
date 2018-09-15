<template>
  <div class="FontMplus">
    <slot></slot>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "FontMplus",
  props: {
    component: {
      default: "div",
      type: String,
    },
  },
};
</script>

<style scoped>
.FontMplus {
  font-family: 'Mplus 1p', sans-serif;
}

.FontMplus >>> * {
  font-family: 'Mplus 1p', sans-serif;
}
</style>

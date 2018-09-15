<template>
  <div class="FontRoboto">
    <slot></slot>
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "FontNotoSerif",
  props: {
    component: {
      default: "div",
      type: String,
    },
  },
};
</script>

<style scoped>
.FontRoboto {
  font-family: 'Noto Serif JP', sans-serif;
}

.FontCormorant >>> * {
  font-family: 'Noto Serif JP', sans-serif;
}
</style>

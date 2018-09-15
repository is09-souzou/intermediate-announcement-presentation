<template>
  <div class="FontCormorant">
    <slot></slot>
    <link href="https://fonts.googleapis.com/css?family=Cormorant+SC" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "FontCormorant",
  props: {
    component: {
      default: "div",
      type: String,
    },
  },
};
</script>

<style scoped>
.FontCormorant {
  font-family: 'Cormorant SC', serif;
}

.FontCormorant >>> * {
  font-family: 'Cormorant SC', serif;
}
</style>

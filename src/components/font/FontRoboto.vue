<template>
  <div class="FontRoboto">
    <slot></slot>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: "FontRoboto",
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
  font-family: 'Roboto', sans-serif;
}

.FontCormorant >>> * {
  font-family: 'Roboto', sans-serif;
}
</style>

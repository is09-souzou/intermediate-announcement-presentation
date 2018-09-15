<template>
  <span class="MySectionTitle">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "MySectionTitle",
};
</script>

<style scoped>
.MySectionTitle {
  font-size: 2.6rem;
  color: #243b5e;
  letter-spacing: .6rem;
  padding: 2rem 1.6rem 4rem 1rem;
}
</style>

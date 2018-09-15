<template>
  <section class="MySection">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "MySection",
};
</script>

<style scoped>
.MySection {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 3rem 7.5vw;
}
</style>

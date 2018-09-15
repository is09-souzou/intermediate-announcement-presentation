<template>
  <main class="MyMain">
    <top-section></top-section>
  </main>
</template>

<script>
import TopSection from "@/components/section/TopSection";

export default {
  name: "MyMain",
  components: {
    TopSection,
  },
};
</script>

<style scoped>
.MyMain {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>

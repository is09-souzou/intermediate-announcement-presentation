<template>
  <div class="MySkillItem">
    <my-image :src="imageSrc"></my-image>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MyImage from "@/components/MyImage";

export default {
  name: "MySkillItem",
  props: ["imageSrc"],
  components: {
    MyImage,
  },
};
</script>

<style scoped>
.MySkillItem {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding-right: 1rem;
  width: 10rem;
  height: 5rem;
}

.MySkillItem > :first-child {
  height: 5rem;
  width: 5rem;
}
</style>

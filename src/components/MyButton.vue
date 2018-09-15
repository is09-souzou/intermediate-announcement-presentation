<template>
  <component :is="component" class="MyButton">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    component: {
      default: "div",
      type: String,
    },
  },
};
</script>

<style scoped>
.MyButton {
  cursor: pointer;
  display: block;
  letter-spacing: .1rem;
  color: #434348;
  border: 1px solid #4c4c55;
  padding: 1rem 2.9rem 1rem 3rem;
  user-select: none;
  transition: all .3s ease-out;
  overflow: hidden;
  position: relative;
  z-index: 1;
  text-decoration: none;
}

.MyButton:hover {
  color: white;
}

.MyButton::before {
  position: absolute;;
  display: block;
  top: 0%;
  left: -100%;
  height: 100%;
  width: 100%;
  z-index: -1;
  content: attr(data-text)"";
  color: white;
  background-color: #243b5e;
  transition: left .2s ease-out;
}

.MyButton:hover::before {
  left: 0%;
}

</style>

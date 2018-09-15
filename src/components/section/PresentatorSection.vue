<template>
  <section class="presentator-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 40"
        :style="{ flexGrow: Math.floor(Math.random() * (4 - 1 + 1) + 1), animationDelay: `.${Math.floor(Math.random() * (4 - 1 + 1) + 1)}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <div class="avatar-wrapper">
        <my-image :src="Avatar"></my-image>
      </div>
      <div class="info">
        <h1>Presentator</h1>
        <div>Yuito Yamamoto</div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import Avatar from "@/assets/yuito-avatar.png";

export default {
  name: "PresentatorSection",
  components: {
    MyImage,
  },
  data: () => ({
    Avatar,
  }),
  methods: {
  },
  mounted() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
.presentator-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.presentator-section[view] {
  display: flex;
}

.animation-slash-list {
  top: -50vh;
  left: -25vw;
  min-height: 150vw;
  min-width: 150vw;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  transform: rotate(-45deg);
  transform-origin: center center;
}

.slash {
  background-color: #00B0FF;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.presentator-section[view] .slash {
  animation-name: SpreadSlash;
  animation-duration: .6s;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 11;
}

.presentator-section[view] .avatar-wrapper {
  animation-delay: 1.3s;
  animation-name: ViewAvatar, Balloon;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: .4s, 1s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, alternate;
}

.avatar-wrapper {
  border-radius: 50%;
  overflow: hidden;
  border-style: solid;
  border-color: #FAFBFD;
  border-width: 0;
  width: 0;
  min-width: 0;
  max-width: 0;
  height: 0;
  min-height: 0;
  max-height: 0;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
}

.info > :first-child {
  color: white;
  font-size: 2rem;
  text-align: left;
  margin: 0;
}

.info > :last-child {
  color: white;
  font-size: 5rem;
}

@keyframes SpreadSlash {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}


@keyframes ViewAvatar {
  from {
    width: 0;
    min-width: 0;
    max-width: 0;
    height: 0;
    min-height: 0;
    max-height: 0;
    border-width: 0;
  }
  to {
    width: 20rem;
    min-width: 20rem;
    max-width: 20rem;
    height: 20rem;
    min-height: 20rem;
    max-height: 20rem;
    border-width: 16px;
  }
}

@keyframes Balloon {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(.95, .95);
  }
}
</style>

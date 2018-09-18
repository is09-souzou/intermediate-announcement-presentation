<template>
  <section class="develop-concept-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 40"
        :style="{ flexGrow: Math.floor(Math.random() * (4 - 1 + 1) + 1), animationDelay: `.${Math.floor(Math.random() * (4 - 1 + 1) + 1)}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <font-cormorant>
        <h1>Develop Concept</h1>
      </font-cormorant>
      <ul>
        <li class="AnimationWiden">
          <div>1. 仕様変更に対し柔軟に対応</div>
          <div></div>
        </li>
        <li class="AnimationWiden">
          <div>2. コミュニケーション重視</div>
          <div></div>
        </li>
        <li class="AnimationWiden">
          <div>3. チーム全員の成長</div>
          <div></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";
import FontNotoSerif from "@/components/font/FontNotoSerif";

export default {
  name: "DevelopConcept",
  components: {
    MyImage,
    FontCormorant,
    FontNotoSerif,
  },
  data: () => ({
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
.develop-concept-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.develop-concept-section[view] {
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
  transform: rotate(45deg);
  transform-origin: center center;
}

.slash {
  background-color: #2979FF;;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.develop-concept-section[view] .slash {
  animation-name: SpreadSlash;
  animation-duration: .6s;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  z-index: 11;
  padding: 4rem;
  font-size: 4rem;
}

.content h1 {
  color: white;
  font-size: 5rem;
  text-align: left;
  margin: 0;
  margin-bottom: -2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  border-bottom: 1px solid #fff;
  line-height: 5rem;
}

.content > p {
  color: white;
  display: block;
  margin-top: 4rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
}

.develop-concept-section[view] .content h1 {
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .content h1 {
  animation-delay: 1s;
}

@keyframes SpreadSlash {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes ViewText2 {
  from {
    bottom: .8rem;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

.AnimationWiden {
  position: relative;
  overflow: hidden;
  background-color: transparent;
}

.AnimationWiden > :not(:last-child) {
  visibility: hidden;
}

.AnimationWiden > :first-child {
  text-align: left;
  font-size: 4rem;
  margin: 0;
  color: white;
}

.AnimationWiden > :last-child {
  width: 200%;
  height: 100%;
  background-color: #333;
  top: -100%;
  left: -195%;
  position: absolute;
  z-index: 2;
}

.develop-concept-section[view] .AnimationWiden:nth-child(1) > :not(:last-child) {
  animation: 0s visibility 1.9s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(1) > :last-child {
  animation: .4s height 1.1s ease-in-out,
             .8s width 1.5s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(2) > :not(:last-child) {
  animation: 0s visibility 2.0s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(2) > :last-child {
  animation: .4s height 1.2s ease-in-out,
             .8s width 1.6s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(3) > :not(:last-child) {
  animation: 0s visibility 2.3s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(3) > :last-child {
  animation: .4s height 1.5s ease-in-out,
             .8s width 1.9s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes visibility {
  100% {
    visibility: visible;
  }
}

@keyframes height {
  100% {
    top: 0%;
  }
}

@keyframes width {
  100% {
    left: 100%;
  }
}
</style>

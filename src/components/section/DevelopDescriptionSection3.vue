<template>
  <section class="develop-description-section">
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
        <h1>3. チーム全体の成長</h1>
      </font-cormorant>
      <ul class="info-list">
        <li>担当箇所を問わずMTGへの全員参加</li>
        <li>ベロシティによって進捗成長率を数値化</li>
        <li>スプリントレビュー時にKPTを作成</li>
        <li>チケット制を導入しタスクを自由に選択</li>
      </ul>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";

export default {
  name: "DevelopDescriptionSection3",
  components: {
    MyImage,
    FontCormorant,
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
.develop-description-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.develop-description-section[view] {
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
  background-color: #2979FF;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.develop-description-section[view] .slash {
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
  font-size: 4rem;
  text-align: left;
  margin: 0;
  margin-bottom: -2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  border-bottom: 1px solid #fff;
  line-height: 5rem;
}

.develop-description-section[view] .content h1 {
  animation-delay: 1s;
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .content h1 {
  animation-delay: 1s;
}

.info-list {
  width: 100%;
}

.info-list li {
  color: white;
  margin: 0 0 0 1rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  text-align: left;
  font-size: 3.5rem;
}

.develop-description-section[view] li {
  animation-duration: .8s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] li:nth-child(1) {
  animation-delay: 1.5s;
}
.develop-description-section[view] li:nth-child(2) {
  animation-delay: 1.8s;
}
.develop-description-section[view] li:nth-child(3) {
  animation-delay: 2.1s;
}
.develop-description-section[view] li:nth-child(4) {
  animation-delay: 2.4s;
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
</style>

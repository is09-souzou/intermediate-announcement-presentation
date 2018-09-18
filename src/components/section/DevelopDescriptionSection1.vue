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
        <h1>1. 仕様変更に対し柔軟に対応</h1>
      </font-cormorant>
      <div class="image-list">
        <div class="AnimationWiden">
          <my-image :src="MTG1" class="image" :cover="true"></my-image>
          <div></div>
        </div>
        <div class="AnimationWiden">
          <my-image :src="MTG2" class="image" :cover="true"></my-image>
          <div></div>
        </div>
        <div class="AnimationWiden">
          <my-image :src="MTG3" class="image" :cover="true"></my-image>
          <div></div>
        </div>
        <div class="AnimationWiden">
          <my-image :src="MTG4" class="image" :cover="true"></my-image>
          <div></div>
        </div>
      </div>
      <div class="hint-button" v-on:click="toggleDialog">？</div>
      <div class="dialog" :view="this.viewDialog">
        <p>1sprintを2週間とし、</p>
        <p>都度スプリントレビューを行い軌道修正</p>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";
import MTG1 from "@/assets/mtg1.jpg";
import MTG2 from "@/assets/mtg2.jpg";
import MTG3 from "@/assets/mtg3.jpg";
import MTG4 from "@/assets/mtg4.jpg";

export default {
  name: "DevelopDescriptionSection1",
  components: {
    MyImage,
    FontCormorant,
  },
  data: () => ({
    MTG1,
    MTG2,
    MTG3,
    MTG4,
    viewDialog: false,
  }),
  methods: {
    toggleDialog: function () {
      this.viewDialog = !this.viewDialog;
    },
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
  transform: rotate(45deg);
  transform-origin: center center;
}

.slash {
  background-color: #00E676;
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

.image-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image-list .image {
  width: 30rem;
  height: 15rem;
  box-sizing: border-box;
  border: 4px solid #1A237E;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px 2px;
}

.hint-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: #FAFBFD;
  border: 8px solid #3D5AFE;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 4px rgba(0,0,0,0.3);
  font-size: 2.5rem;
  transition: all .3s ease-in-out;
}

.hint-button:hover {
  width: 5rem;
  height: 5rem;
  transform: rotate(360deg);
  font-size: 3rem;
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
  top: 0;
  margin: 4rem 4rem 0;
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

.develop-description-section[view] .AnimationWiden:nth-child(1) > :not(:last-child) {
  animation: 1s visibility 2.2s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(1) > :last-child {
  animation: .4s height 1.1s ease-in-out,
             .8s width 1.5s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(2) > :not(:last-child) {
  animation: 1s visibility 2.4s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(2) > :last-child {
  animation: .4s height 1.3s ease-in-out,
             .8s width 1.7s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(3) > :not(:last-child) {
  animation: 1s visibility 2.6s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(3) > :last-child {
  animation: .4s height 1.5s ease-in-out,
             .8s width 1.9s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(4) > :not(:last-child) {
  animation: 1s visibility 2.8s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-description-section[view] .AnimationWiden:nth-child(4) > :last-child {
  animation: .4s height 1.7s ease-in-out,
             .8s width 2.1s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes visibility {
  from {
    opacity: 0;
  }
  1% {
    visibility: visible;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}

@keyframes height {
  from {
    top: 100%;
  }
  to {
    top: 0%;
  }
}

@keyframes width {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}

.dialog {
  position: absolute;
  opacity: 0;
  background-color: #FAFBFD;
  transition: all .3s ease-in-out;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 1px 3px 6px 1px rgba(0,0,0,.3);
  width: calc(100% - 12rem);
  margin: 0 4rem;
  left: 0;
}

.dialog p {
  color: #333;
  display: block;
  margin: 0;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  text-align: left;
  font-size: 3.5rem;
}

.dialog[view] p {
  animation-delay: .3s;
  animation-duration: .8s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.dialog[view] {
  opacity: 1;
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

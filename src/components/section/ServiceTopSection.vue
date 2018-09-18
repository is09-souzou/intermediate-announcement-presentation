<template>
  <section
    class="service-top-section"
    :view="view"
    :content="this.isViewconcept ? 'concept': this.isViewTarget ? 'target' : this.isViewGoal ? 'goal' : ''"
  >
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 15"
        :style="{ animationDelay: `${n / 10}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <font-cormorant class="headline-wrapper">
        <h1>{{ headline }}</h1>
      </font-cormorant>
    </div>
    <div :view="this.isViewconcept" class="concept" v-on:click="viewconcept()">
      <div class="icon"><star-outline-icon/></div>
      <div class="widget">
        <font-cormorant><h2>concept</h2></font-cormorant>
        <div>
          <ul>
            <li>クリエイターの知名度に依存しない、作品の出会いの場を提供する。</li>
            <li>活躍の場を広げる手助けとなる。</li>
          </ul>
        </div>
      </div>
    </div>
    <div :view="this.isViewTarget" class="target" v-on:click="viewTarget()">
      <div class="icon"><face-icon/></div>
      <div class="widget">
        <font-cormorant><h2>Target</h2></font-cormorant>
        <div>
          <ul>
            <li>これから活動を始めたい人向け</li>
            <li>始めてるけど無名の人向け</li>
          </ul>
        </div>
      </div>
    </div>
    <div :view="this.isViewGoal" class="goal" v-on:click="viewGoal()">
      <div class="icon"><flag-outline-icon/></div>
      <div class="widget">
        <font-cormorant><h2>Goal</h2></font-cormorant>
        <div>
          <ul>
            <li>好きなことで生きていく！ (subscribers 1,000,000+)</li>
            <li>I will live by my favorite things</li>
            <li>作品(彼氏)と生活する。</li>
            <li>「進捗、どうですか？」</li>
            <li>笑顔になる＾＾</li>
            <li>自分を武器に</li>
            <li>↑ 考えて！！！！！！！！ ごめん！</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarOutlineIcon from "vue-material-design-icons/StarOutline";
import FaceIcon from "vue-material-design-icons/Face";
import FlagOutlineIcon from "vue-material-design-icons/FlagOutline";
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";
import FontRobot from "@/components/font/FontRoboto";

export default {
  name: "ServiceTopSection",
  components: {
    MyImage,
    FontCormorant,
    FontRobot,
    StarOutlineIcon,
    FaceIcon,
    FlagOutlineIcon,
  },
  props: ["view"],
  data: () => ({
    headline: "Service Introduction",
    isViewconcept: false,
    isViewTarget: false,
    isViewGoal: false,
  }),
  methods: {
    viewconcept: function () {
      this.isViewconcept = !this.isViewconcept;
      this.isViewTarget = false;
      this.isViewGoal = false;
    },
    viewTarget: function () {
      this.isViewconcept = false;
      this.isViewTarget = !this.isViewTarget;
      this.isViewGoal = false;
    },
    viewGoal: function () {
      this.isViewconcept = false;
      this.isViewTarget = false;
      this.isViewGoal = !this.isViewGoal;
    },
  },
  watch: {
    view: function (next, prev) {
      if (!prev && next) {
        this.headline = "Service introduction";
        setTimeout(
          () => {
            this.headline = "Portal";
          },
          4400 + 300,
        );
      }
    },
  },
  mounted() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
.service-top-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.service-top-section[view] {
  display: flex;
}

.animation-slash-list {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  transform-origin: center center;
}

.slash {
  background-color: #FAFBFD;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  height: 0;
  margin: -1px;
  flex-grow: 1;
}

.service-top-section[view] .slash {
  animation-name: SpreadSlash;
  animation-duration: .6s;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 11;
  font-size: 4rem;
  position: absolute;
}

.headline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 0px;
  overflow: hidden;
  border-bottom: 1px solid #333;
  font-size: 6rem;
}

.service-top-section[view] .headline-wrapper {
  animation-delay           : 2.2s, 3.8s, 5.2s;
  animation-duration        : .6s;
  animation-name            : ViewText1, ViewText2, ViewText3;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.headline-wrapper > h1 {
  line-height: 7rem;
  margin: 1rem 0;
  white-space: nowrap;
  letter-spacing: 2rem;
  margin-right: -2rem;
}

@keyframes SpreadSlash {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes ViewText1 {
  from {
    max-width: 0px;
  }
  to {
    max-width: 100%;
    font-size: 2rem;
  }
}

@keyframes ViewText2 {
  from {
    max-width: 100%;
    font-size: 2rem;
  }
  99% {
    color: #333;
    border-bottom-color: #333;
    font-size: 2rem;
  }
  to {
    color: #E65100;
    border-bottom-color: #E65100;
    max-width: 0px;
    font-size: 6rem;
  }
}

@keyframes ViewText3 {
  from {
    max-width: 0px;
  }
  to {
    max-width: 100%;
  }
}

.concept,
.target,
.goal {
  position: absolute;
  border-radius: 50%;
  width: 0;
  height: 0;
  box-shadow: 0px 0px 11px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: .5rem;
  z-index: 1000;
  transition: all .3s ease-in-out;
  min-width: 0;
  min-height: 0;
}

.concept:hover,
.target:hover,
.goal:hover {
  min-width: 40rem;
  min-height: 40rem;
}

.service-top-section[view] .concept,
.service-top-section[view] .target,
.service-top-section[view] .goal {
  animation-duration        : .6s;
  animation-name            : Swell;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.service-top-section[view] .concept {
  animation-delay: 5.7s;
}
.service-top-section[view] .target {
  animation-delay: 5.9s;
}
.service-top-section[view] .goal {
  animation-delay: 6.1s;
}

.concept[view],
.target[view],
.goal[view] {
  min-width: 100vw;
  min-height: 100vh;
  border-radius: 2px;
}

.concept[view] {
  left: 0;
  top: 0;
  background-color: #FF9100;
}
.target[view] {
  right: 0;
  top: 0;
  background-color: #00E676;
}
.goal[view] {
  left: 0;
  bottom: 0;
  background-color: #00B0FF;
}

.concept > .icon,
.target > .icon,
.goal > .icon {
  position: relative;
  font-weight: normal;
  color: #555;
  font-size: 6rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.concept[view] > .icon,
.target[view] > .icon,
.goal[view] > .icon {
  opacity: 0;
}

.concept {
  left: -20rem;
  top: -20rem;
  background-color: #FFF3E0;
}

.concept > .icon {
  right: -7rem;
  bottom: -7rem;
}

.target {
  top: -20rem;
  right: -20rem;
  background-color: #F1F8E9;
}

.target > .icon {
  left: -7rem;
  bottom: -7rem;
}

.goal {
  bottom: -20rem;
  left: -20rem;
  background-color: #E1F5FE;
}

.goal > .icon {
  right: -7rem;
  top: -7rem;
}

.widget {
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
  flex-direction: column;
  padding: 4rem 4rem 12rem;
  box-sizing: border-box;
  color: white;
}

.concept[view] .widget,
.target[view] .widget,
.goal[view] .widget {
  display: flex;
}

.widget h2 {
  font-size: 4rem;
  margin: 0;
}

.widget li {
  text-align: left;
  font-size: 2rem;
  margin: 0;
  line-height: 4rem;
}

@keyframes Swell {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 35rem;
    height: 35rem;
  }
}
</style>

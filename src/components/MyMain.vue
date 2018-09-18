<template>
  <main
    :class="'main ' + (this.step ? `step-${this.step}` : '')"
  >
    <section
      :class="topClasses.concat('top-section').join(' ')"
    >
      <iframe class="poly" width="100%" height="100%" src="https://poly.google.com/view/9sDZ8rsYE9e/embed" frameborder="0" style="border:none;" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe>
      <div class="start-button" v-on:click="start()">
        <microphone-outline-icon class="mic-icon"/>
      </div>
      <div class="animation-paper-1"></div>
      <div class="animation-paper-2"></div>
      <div class="animation-paper-3 main-content">
        <div>
          <font-cormorant class="service-name-wrapper">
            <h1>SOUZOU</h1>
          </font-cormorant>
          <font-noto-serif>
            <p>中間発表</p>
          </font-noto-serif>
        </div>
      </div>
    </section>
    <presentator-section :view="this.step === 2 || this.step === 3"></presentator-section>
    <team-section :view="this.step === 3 || this.step === 4"></team-section>
    <member-section :view="this.step === 4 || this.step === 5"></member-section>
    <service-top-section :view="this.step === 5 || this.step === 6"></service-top-section>
    <demo-section :view="this.step === 6 || this.step === 7"></demo-section>
    <develop-method-section :view="this.step === 7 || this.step === 8"></develop-method-section>
    <develop-concept-section :view="this.step === 8 || this.step === 9" :end="this.step === 9"></develop-concept-section>
    <develop-description-section1 :view="this.step === 9 || this.step === 10"></develop-description-section1>
    <develop-description-section2 :view="this.step === 10 || this.step === 11"></develop-description-section2>
    <develop-description-section3 :view="this.step === 11 || this.step === 12"></develop-description-section3>
    <sprint-recode-section :view="this.step === 12 || this.step === 13"></sprint-recode-section>
    <sprint-log-section1 :view="this.step === 13 || this.step === 14"></sprint-log-section1>
    <sprint-log-section2 :view="this.step === 14 || this.step === 15"></sprint-log-section2>
    <sprint-log-section3 :view="this.step === 15 || this.step === 16"></sprint-log-section3>
    <sprint-log-section4 :view="this.step === 16 || this.step === 17"></sprint-log-section4>
    <sprint-chart-section :view="this.step === 17 || this.step === 18"></sprint-chart-section>
    <future-challenges-section :view="this.step === 18 || this.step === 19"></future-challenges-section>
    <portal-technology-section :view="this.step === 19"></portal-technology-section>
    <div class="prev-button" v-on:click="prev()"></div>
    <div class="next-button" v-on:click="next()"></div>
  </main>
</template>

<script>
import MicrophoneOutlineIcon from "vue-material-design-icons/MicrophoneOutline";
import FontCormorant from "@/components/font/FontCormorant";
import FontNotoSerif from "@/components/font/FontNotoSerif";
import DemoSection from "@/components/section/DemoSection";
import DevelopConceptSection from "@/components/section/DevelopConceptSection";
import DevelopDescriptionSection1 from "@/components/section/DevelopDescriptionSection1";
import DevelopDescriptionSection2 from "@/components/section/DevelopDescriptionSection2";
import DevelopDescriptionSection3 from "@/components/section/DevelopDescriptionSection3";
import FutureChallengesSection from "@/components/section/FutureChallengesSection";
import DevelopMethodSection from "@/components/section/DevelopMethodSection";
import MemberSection from "@/components/section/MemberSection";
import PortalTechnologySection from "@/components/section/PortalTechnologySection";
import PresentatorSection from "@/components/section/PresentatorSection";
import SprintChartSection from "@/components/section/SprintChartSection";
import ServiceTopSection from "@/components/section/ServiceTopSection";
import SprintLogSection1 from "@/components/section/SprintLogSection1";
import SprintLogSection2 from "@/components/section/SprintLogSection2";
import SprintLogSection3 from "@/components/section/SprintLogSection3";
import SprintLogSection4 from "@/components/section/SprintLogSection4";
import SprintRecodeSection from "@/components/section/SprintRecodeSection";
import TeamSection from "@/components/section/TeamSection";

export default {
  name: "MyMain",
  props: ["src"],
  data: () => ({
    step: 0,
    topClasses: [],
    disabled: false,
  }),
  components: {
    MicrophoneOutlineIcon,
    FontCormorant,
    FontNotoSerif,
    DemoSection,
    DevelopConceptSection,
    DevelopDescriptionSection1,
    DevelopDescriptionSection2,
    DevelopDescriptionSection3,
    FutureChallengesSection,
    DevelopMethodSection,
    MemberSection,
    PortalTechnologySection,
    PresentatorSection,
    ServiceTopSection,
    SprintChartSection,
    SprintLogSection1,
    SprintLogSection2,
    SprintLogSection3,
    SprintLogSection4,
    SprintRecodeSection,
    TeamSection,
  },
  methods: {
    start: function () {
      this.topClasses = this.topClasses.includes("start") ? this.topClasses : this.topClasses.concat("start");
      setTimeout(
        () => {
          this.step = 1;
        },
        7000,
      );
    },
    next: function () {
      if (!this.disabled) {
        this.step = this.step + 1;
        this.disabled = true;
        setTimeout(
          () => {
            this.disabled = false;
          },
          2000,
        );
        console.log(`Current Step: ${this.step}`);
      }
    },
    prev: function () {
      if (this.step !== 1) {
        this.step = this.step - 1;
        console.log(this.step);
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 37) {
        console.log("Left was pressed");
        this.prev();
      } else if (event.shiftKey && event.keyCode === 39) {
        this.step = this.step + 1;
      } else if (event.keyCode === 39) {
        console.log("Right was pressed");
        this.next();
      }
    });
  },
  destroyed() {
  },
};
</script>

<style scoped>

.color-list {
  background-color: #FF1744;
  background-color: #F50057;
  background-color: #D500F9;
  background-color: #651FFF;
  background-color: #3D5AFE;
  background-color: #2979FF;
  background-color: #00B0FF;
  background-color: #00E5FF;
  background-color: #1DE9B6;
  background-color: #00E676;
  background-color: #76FF03;
  background-color: #C6FF00;
  background-color: #FFEA00;
  background-color: #FFC400;
  background-color: #FF9100;
  background-color: #FF3D00;

  background-color: #FF9100;
  background-color: #3D5AFE;
  background-color: #00E676;
}

.main {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.main[class*=step] .next-button {
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
}

.next-button {
  display: flex;
  width: 136px;
  height: 32px;
  border-bottom: 1px solid #aaa;
  opacity: 0;
  position: absolute;
  bottom: 32px;
  right: 32px;
  transition: all .3s ease-in-out;
  z-index: 10;
  pointer-events: none;
}

.next-button::after {
  content: "";
  position: absolute;
  height: 1px;
  transform: rotate(50deg);
  width: 26px;
  right: 0;
  bottom: 0;
  transform-origin: right bottom;
  background-color: #aaa;
}

.main[class*=step] .prev-button {
  opacity: 1;
  pointer-events: auto;
  cursor: pointer;
}

.prev-button {
  display: flex;
  width: 136px;
  height: 32px;
  border-bottom: 1px solid #aaa;
  opacity: 0;
  position: absolute;
  bottom: 32px;
  left: 32px;
  transition: all .3s ease-in-out;
  z-index: 10;
  pointer-events: none;
}

.prev-button::after {
  content: "";
  position: absolute;
  height: 1px;
  transform: rotate(-50deg);
  width: 26px;
  left: 0;
  bottom: 0;
  transform-origin: left bottom;
  background-color: #aaa;
}

.start-button {
  background-color: white;
  padding: .6rem 1rem 1.4rem;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 11px 4px rgba(0,0,0,0.5);
  transition: all .4s cubic-bezier(1, -1.84, 0.68, 1.74);
  border: 2px solid #ff9100;
  position: relative;
}

.start-button:hover {
  width: 8rem;
  height: 8rem;
  border: 8px solid #ff9100;
}

.start-button::after {
  content: "";
  background-color: rgba(0, 0, 0, .2);
  border-radius: 50%;
  width: 11rem;
  height: 11rem;
  position: absolute;
  z-index: -1;
  top: -1.5rem;
  animation-name: Balloon;
  animation-iteration-count: infinite;
  animation-duration: .8s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  transition: all .8s ease-in-out;
  opacity: 1;
}
.start-button:hover::after {
  transform: scale(0.5, 0.5) !important;
  animation-name: none;
  opacity: 0;
}

.main.start .start-button::after {
  width: 0rem !important;
  height: 0rem !important;
  opacity: 0 !important;
  animation-name: none !important;
}

.top-section.start .start-button {
  animation-delay           : 0s, 2s, 3s;
  animation-duration        : 5s, 1s, 0s;
  animation-name            : Rotate, Diminishing, Destroy;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.mic-icon {
  font-size: 4.5rem;
  color: #ff9100;
  transition: all .4s cubic-bezier(1, -1.84, 0.68, 1.74);
}

.start-button:hover .mic-icon {
  font-size: 5rem;
}

.poly {
  position: absolute;
  z-index: -1;
}

.start.top-section .poly {
  animation-delay: 3s;
  animation-duration: 0.1s;
  animation-name: Destroy;
  animation-fill-mode: forwards;
}

.animation-paper-1,
.animation-paper-2,
.animation-paper-3 {
  border-radius: 24px;
  height: calc(100vh + 32px);
  width:  calc(100vw + 32px);
  position: absolute;
  top: -16px;
  transform-origin: right bottom;
  transform: rotate(45deg);
  opacity: 0;
  bottom: 128px;
  box-shadow: 0 2px 11px 2px rgba(0,0,0,0.3);
}

.animation-paper-1 {
  /* background-color: #FF9100; */
  background-color: #00E676;
}

.animation-paper-2 {
  background-color: #00B0FF;
}

.animation-paper-3 {
  background-color: #FAFBFD;
}
.start.top-section .animation-paper-1 {
  animation-delay           : 2s;
  animation-duration        : .8s;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
  z-index: 1;
}

.start.top-section .animation-paper-2 {
  animation-delay           : 2.25s;
  animation-duration        : 1.1s;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
  z-index: 2;
}

.start.top-section .animation-paper-3 {
  animation-delay           : 2.5s;
  animation-duration        : 1.8s;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
  z-index: 3;
}

.main-content,
.main-content > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-name-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 0px;
  overflow: hidden;
}

.start.top-section .service-name-wrapper {
  animation-delay           : 4.5s;
  animation-duration        : .6s;
  animation-name            : ViewText1;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.service-name-wrapper > h1 {
  border-bottom: 1px solid #333;
  line-height: 7rem;
  margin: 1rem 0;
  white-space: nowrap;
  font-size: 8rem;
  letter-spacing: 2rem;
  margin-right: -2rem;
}

.main-content p {
  font-size: 2.5rem;
  letter-spacing: .5rem;
  margin: 0;
  white-space: nowrap;
  opacity: 0;
  position: relative;
  padding-bottom: .8rem;
}

.start.top-section .main-content p {
  animation-delay: 5.3s;
  animation-duration: .8s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

/*
  Presentator Section
*/
@keyframes Balloon {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(.95, .95);
  }
}

@keyframes Rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(3600deg);
  }
}

@keyframes Diminishing {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes RollIn {
  from {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  to {
    transform: rotate(0deg);
    bottom: 0;
    opacity: 1;
  }
}

@keyframes ViewText1 {
  from {
    max-width: 0px;
  }
  to {
    max-width: 100%;
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

@keyframes Destroy {
  to {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
}
</style>

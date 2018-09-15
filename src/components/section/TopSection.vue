<template>
  <div
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
  </div>
</template>

<script>
import MicrophoneOutlineIcon from "vue-material-design-icons/MicrophoneOutline";
import FontCormorant from "@/components/font/FontCormorant";
import FontNotoSerif from "@/components/font/FontNotoSerif";

export default {
  name: "TopSection",
  props: ["src"],
  data: () => ({
    topClasses: [],
  }),
  components: {
    MicrophoneOutlineIcon,
    FontCormorant,
    FontNotoSerif,
  },
  methods: {
    start: function () {
      this.topClasses = this.topClasses.includes("start") ? this.topClasses : this.topClasses.concat("start");
    },
  },
  mounted() {
  },
  destroyed() {
  },
};
</script>

<style scoped>
.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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

.start.top-section .animation-paper-1 {
  animation-delay           : 2s;
  animation-duration        : .8s;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
  z-index: 1;
}

.start.top-section .animation-paper-2 {
  background-color: #00B0FF;
  animation-delay           : 2.25s;
  animation-duration        : 1.1s;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
  z-index: 2;
}

.start.top-section .animation-paper-3 {
  background-color: #FAFBFD;
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
  letter-spacing: 1rem;
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

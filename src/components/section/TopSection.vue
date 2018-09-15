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
        <p>中間発表</p>
      </div>
    </div>
  </div>
</template>

<script>
import MicrophoneOutlineIcon from "vue-material-design-icons/MicrophoneOutline";
import FontCormorant from "@/components/font/FontCormorant";

export default {
  name: "TopSection",
  props: ["src"],
  data: () => ({
    topClasses: [],
  }),
  components: {
    MicrophoneOutlineIcon,
    FontCormorant,
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
  border: 0px solid #ff9100;
  z-index: 1000;
}

.start-button:hover {
  width: 8rem;
  height: 8rem;
  border: 8px solid #ff9100;
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
  height: calc(100vh - 8px);
  width:  calc(100vw - 8px);
  position: absolute;
  right: 0;
  transform-origin: right bottom;
  transform: rotate(45deg);
  opacity: 0;
  bottom: 128px;
  box-shadow: 0 2px 11px 2px rgba(0,0,0,0.3);
  margin: 4px;
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
  animation-duration        : 1.6s;
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
  animation-delay           : 5s;
  animation-duration        : 1s;
  animation-name            : ViewTitle;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.service-name-wrapper > h1 {
  border-bottom: 1px solid #333;
  line-height: 7rem;
  margin: 1rem 0;
  white-space: nowrap;
}

.start.top-section .service-name-wrapper > h1 {
  font-size: 8rem;
  letter-spacing: 1rem;
  animation-name            : RollIn;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.service-name-wrapper > p {
  font-size: 4rem;
  margin: 0;
  white-space: nowrap;
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

@keyframes ViewTitle {
  to {
    max-width: 100%;
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

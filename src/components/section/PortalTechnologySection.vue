<template>
  <section class="portal-technology-section">
    <div class="balloons">
      <div class="balloon"></div>
      <div class="balloon"></div>
      <div class="balloon"></div>
      <div class="balloon"></div>
      <div class="balloon"></div>
    </div>
    <div class="content">
      <font-cormorant>
        <h1>Portal Technology</h1>
      </font-cormorant>
    </div>
  </section>
</template>

<script>
import FontCormorant from "@/components/font/FontCormorant";
import ServiceQR from "@/assets/service-qr.png";

export default {
  name: "PortalTechnology",
  components: {
    FontCormorant,
  },
  data: () => ({
    ServiceQR,
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
.portal-technology-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portal-technology-section[view] {
  display: flex;
}

.balloons {
  width: 70vh;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.balloon {
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 0px 11px 4px rgba(0,0,0,0.1);
  animation-duration        : 1s;
  animation-timing-function : cubic-bezier(0, 0, 0.01, 1);
  animation-fill-mode       : forwards;
  transform: scale(0, 0);
}

.balloon:nth-child(1) {
  left: 0;
  top: 0;
  background-color: #E1F5FE;
}
.balloon:nth-child(2) {
  right: 0;
  bottom: 0;
  background-color: #FFF3E0;
}
.balloon:nth-child(3) {
  left: 0;
  bottom: 0;
  background-color: #ECEFF1;
}
.balloon:nth-child(4) {
  right: 0;
  top: 0;
  background-color: #E8F5E9;
}
.balloon:nth-child(5) {
  position: relative;
  background-color: #FF9100;
}

.portal-technology-section[view] .balloon:nth-child(1) {
  animation-delay: 0s;
  animation-name: Balloon;
}
.portal-technology-section[view] .balloon:nth-child(2) {
  animation-delay: .2s;
  animation-name: Balloon;
}
.portal-technology-section[view] .balloon:nth-child(3) {
  animation-delay: .4s;
  animation-name: Balloon;
}
.portal-technology-section[view] .balloon:nth-child(4) {
  animation-delay: .6s;
  animation-name: Balloon;
}
.portal-technology-section[view] .balloon:nth-child(5) {
  animation-delay: 1s;
  animation-name: MainBalloon;
}

.portal-technology-section .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
}

.portal-technology-section .content > :nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 0px;
  overflow: hidden;
  z-index: 1;
}

.portal-technology-section[view] .content > :nth-child(1) {
  animation-delay           : 2s;
  animation-duration        : .6s;
  animation-name            : ViewText1;
  animation-timing-function : ease-in-out;
  animation-fill-mode       : forwards;
}

.portal-technology-section .content > :nth-child(1) h1 {
  border-bottom: 1px solid white;
  line-height: 7rem;
  margin: 1rem 0;
  white-space: nowrap;
  font-size: 4rem;
  letter-spacing: 2rem;
  margin-right: -2rem;
  color: white;
}

@keyframes Balloon {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1.5, 1.5);
  }
}

@keyframes MainBalloon {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(6, 6);
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
</style>

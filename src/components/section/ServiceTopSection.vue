<template>
  <section class="service-top-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 15"
        :style="{ animationDelay: `${n / 10}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <font-cormorant>
        <h1>Our Mission</h1>
      </font-cormorant>
      <p>
        すべてのクリエイターの活躍を手助けする.
      </p>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";

export default {
  name: "ServiceTopSection",
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
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  z-index: 11;
  padding: 4rem;
  font-size: 4rem;
}


@keyframes SpreadSlash {
  from {
    height: 0;
  }
  to {
    height: 100%;
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

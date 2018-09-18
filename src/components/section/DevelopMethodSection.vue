<template>
  <section class="develop-method-section">
    <div class="animation-slash-list">
      <div class="slash">
        <div class="inner-slash content">
          <font-cormorant>
            <h1>Develop Method</h1>
          </font-cormorant>
        </div>
      </div>
    </div>
    <div class="content">
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";

export default {
  name: "DevelopMethodSection",
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
.develop-method-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.develop-method-section[view] {
  display: flex;
}

.animation-slash-list {
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.slash {
  background-color: #00E676;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 32px;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.develop-method-section[view] .slash {
  animation-name: SpreadHeightSlash,  SpreadWidthSlash;
  animation-delay: 0s, .7s;
  animation-duration: .3s, .6s;
}

.inner-slash {
  background-color: #FAFBFD;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 2px;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.develop-method-section[view] .inner-slash {
  animation-name: SpreadHeightSlash,  SpreadWidthSlash;
  animation-delay: .1s, 1s;
  animation-duration: .3s, .4s;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
  font-size: 4rem;
  box-sizing: border-box;
}

.content h1 {
  color: #333;
  font-size: 5rem;
  text-align: left;
  margin: 0;
  margin-bottom: -2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  border-bottom: 1px solid #333;
  line-height: 5rem;
}

.develop-method-section[view] .content h1 {
  animation-delay: 1.6s;
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}


@keyframes SpreadHeightSlash {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes SpreadWidthSlash {
  from {
    width: 32px;
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
</style>

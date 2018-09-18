<template>
  <section class="future-challenges-section">
    <div class="animation-slash-list">
      <div class="slash">
        <div class="inner-slash content">
          <font-cormorant>
            <h1>Futurre Challenges</h1>
            <div class="info-row">
              <div>
                <h2>Overall</h2>
                <ul>
                  <li>基本機能の強化</li>
                  <li>リクルート面の強化</li>
                  <li>投稿モチベーションの向上を図りたい</li>
                </ul>
              </div>
              <div>
                <h2>Function</h2>
                <ul>
                  <li>作品削除</li>
                  <li>ワード検索</li>
                  <li>フォロー機能</li>
                  <li>作品の公開範囲</li>
                  <li>プロフィールの公開範囲</li>
                </ul>
              </div>
            </div>
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
  name: "FutureChallengesSection",
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
.future-challenges-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.future-challenges-section[view] {
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
  background-color: #FFC400;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 32px;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.future-challenges-section[view] .slash {
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

.future-challenges-section[view] .inner-slash {
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

.sprint-log-section[view] .content {
  animation-delay: .7s;
  animation-duration: 0s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.content h1 {
  color: #333;
  font-size: 5rem;
  text-align: center;
  margin: 0;
  margin-bottom: -2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  border-bottom: 1px solid #333;
  line-height: 5rem;
}

.future-challenges-section[view] .content h1 {
  animation-delay: 1.6s;
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.info-row {
  display: flex;
  margin-top: 4rem;
}

.info-row > * {
  margin: 0 2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
}

.future-challenges-section[view] .info-row > * {
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.future-challenges-section[view] .info-row > :first-child {
  animation-delay: 2.3s;
}

.future-challenges-section[view] .info-row > :last-child {
  animation-delay: 2.6s;
}

h2 {
  font-size: 2rem;
  font-weight: normal;
}

ul {
  margin: 0;
}

li {
  text-align: left;
  font-size: 2rem;
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

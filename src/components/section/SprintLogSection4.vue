<template>
  <section class="sprint-log-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 10"
        :key="n"
      >
        <div></div>
      </div>
    </div>
    <div class="content">
      <font-cormorant>
        <h1>4 Sprint</h1>
      </font-cormorant>
      <div class="description">
        <div>
          <h2>Function</h2>
          <ul>
            <li>メールアドレス更新</li>
            <li>パスワード更新</li>
            <li>タグ検索</li>
            <li>作品一覧ページの改修(Refactor & Fix)</li>
          </ul>
        </div>
        <div>
          <h2>Ticket count</h2>
          <ul>
            <li>32</li>
          </ul>
        </div>
        <div>
          <h2>Complete story point</h2>
          <ul>
            <li>98(82%)</li>
          </ul>
        </div>
        <div>
          <h2>Sprint task</h2>
          <ul>
            <li>タスク外の作業やIssueもasanaで管理する</li>
            <li>wikiを頻繁に更新する</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";

export default {
  name: "SprintLogSection4",
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
.sprint-log-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: 0s;
  animation-delay: .7s;
  animation-name: WhiteOut;
}

.sprint-log-section[view] {
  display: flex;
}

.animation-slash-list {
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: rotate(0deg);
  transform-origin: center center;
  z-index: 1;
}

.slash {
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: .3s;
  animation-delay: 0s;
  width: 0;
  margin: -1px;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

.slash > :first-child {
  background-color: #00E676;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: .8s;
  animation-delay: .3s;
  width: 100vw;
  height: calc(100vh / 10);
  top: calc(100vh / 10);
  position: relative;
}

.sprint-log-section[view] .slash {
  animation-name: SpreadWidthSlash;
}

.sprint-log-section[view] .slash > :first-child {
  animation-name: SpreadHeightSlash;
}

.content {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
  padding: 4rem;
  font-size: 4rem;
  visibility: hidden;
}

.content > :first-child {
  align-self: flex-start;
}

.content h1 {
  color: #333;
  font-size: 7rem;
  text-align: left;
  margin: 3rem 4rem 0 0;
  position: relative;
  border-bottom: 1px solid #333;
  line-height: 7rem;
}

.content > p {
  color: #333;
  display: block;
  margin-top: 4rem;
  position: relative;
}

.sprint-log-section[view] .content {
  animation-delay: .7s;
  animation-duration: 0s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes SpreadWidthSlash {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes SpreadHeightSlash {
  from {
    top: calc(100vh / 10);
  }
  to {
    top: calc(-100vh / 10 - 2px);
  }
}

@keyframes ViewText2 {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}

@keyframes WhiteOut {
  to {
    background-color: #FAFBFD;
  }
}

.description {
  box-sizing: border-box;
  margin-bottom: 2rem;
}

.description h2 {
  margin: 0;
  margin-top: 1.4rem;
  font-size: 2rem;
  text-align: left;
}

.description ul {
  margin: 0;
}

.description li {
  text-align: left;
  font-size: 2rem;
}

</style>

<template>
  <section class="develop-concept-section" :view="view" :end="end">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 40"
        :style="{ flexGrow: Math.floor(Math.random() * (4 - 1 + 1) + 1), animationDelay: `.${Math.floor(Math.random() * (4 - 1 + 1) + 1)}s`}"
        :key="n"
      ></div>
    </div>
    <div :class="['content'].concat([this.viewDetail ? 'detail' : '']).join(' ')">
      <font-cormorant>
        <h1>Develop Concept</h1>
      </font-cormorant>
      <ul>
        <li class="AnimationWiden">
          <div>1. 仕様変更に対し柔軟に対応</div>
          <div></div>
        </li>
        <li class="AnimationWiden">
          <div>2. コミュニケーション重視</div>
          <div></div>
        </li>
        <li class="AnimationWiden">
          <div>3. チームメンバーの成長</div>
          <div></div>
        </li>
      </ul>
      <div class="detail-button" v-on:click="detailButton()"></div>
      <div class="detail-content">
        <div class="widget">
          <div class="widget-item-wrapper" :style="{left: `-${this.step * 100}%`}">
            <div class="widget-item">
              <h3>Scrum</h3>
              <div>
                <h4>アジャイル開発手法の一つ</h4>
                <p>- スケジュール管理</p>
                <p>- タスク管理</p>
                <p>- MTG日程管理</p>
              </div>
            </div>
            <div class="widget-item">
              <h3>User Story Mapping</h3>
              <div>
                <p>エンドユーザーのStoryを考え、サービスを考えていく手法</p>
              </div>
              <div class="image-list">
                <my-image class="image" :src="USM1"></my-image>
                <my-image class="image" :src="USM2"></my-image>
              </div>
            </div>
            <div class="widget-item">
              <h3>Tools</h3>
              <div class="tool-list">
                <div
                  v-on:click="displayToolInfo('プロジェクト管理アプリケーション', AsanaSS)"
                >
                  <my-image
                    class="image"
                    :src="AsanaLogo"
                  ></my-image>
                </div>
                <div
                  v-on:click="displayToolInfo('バージョン管理システム', GithubSS)"
                >
                  <my-image
                    class="image"
                    :src="GithubLogo"
                  ></my-image>
                </div>
                <div
                  v-on:click="displayToolInfo('Team Wikipedia', GrowiSS)"
                >
                  <my-image
                    class="image"
                    :src="GrowiLogo"
                  ></my-image>
                </div>
                <div
                  v-on:click="displayToolInfo('チームコミュニケーションツール', SlackSS)"
                >
                  <my-image
                    class="image"
                    :src="SlackLogo"
                  ></my-image>
                </div>
                <div
                  v-on:click="displayToolInfo('かんばん式タスク管理ツール', TrelloSS)"
                >
                  <my-image
                    class="image"
                    :src="TrelloLogo"
                  ></my-image>
                </div>
              </div>
              <div class="info" v-if="this.viewToolInfo">
                <my-image :src="this.toolImage"></my-image>
                <div>{{ this.toolInfo }}</div>
                <div v-on:click="hideToolInfo">CLOSE</div>
              </div>
            </div>
          </div>
          <div class="prev-button" v-on:click="prevButton" v-if="this.step !== 0"><p>prev</p></div>
          <div class="next-button" v-on:click="nextButton" v-if="this.step !== 2"><p>next</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";
import FontNotoSerif from "@/components/font/FontNotoSerif";
import USM1 from "@/assets/usm1.jpg";
import USM2 from "@/assets/usm2.jpg";
import AsanaLogo from "@/assets/logo-asana.svg";
import GithubLogo from "@/assets/logo-github.png";
import GrowiLogo from "@/assets/logo-growi.png";
import SlackLogo from "@/assets/logo-slack.png";
import TrelloLogo from "@/assets/logo-trello.png";

import AsanaSS from "@/assets/ss-asana.png";
import GithubSS from "@/assets/ss-github.png";
import GrowiSS from "@/assets/ss-growi.png";
import SlackSS from "@/assets/ss-slack.png";
import TrelloSS from "@/assets/ss-trello.png";

export default {
  name: "DevelopConcept",
  components: {
    MyImage,
    FontCormorant,
    FontNotoSerif,
  },
  data: () => ({
    USM1,
    USM2,
    AsanaLogo,
    GithubLogo,
    GrowiLogo,
    SlackLogo,
    TrelloLogo,
    AsanaSS,
    GithubSS,
    GrowiSS,
    SlackSS,
    TrelloSS,
    viewDetail: false,
    step: 0,
    toolInfo: "",
    viewToolInfo: false,
    toolImage: undefined,
  }),
  props: ["view", "end"],
  methods: {
    detailButton: function () {
      this.viewDetail = !this.viewDetail;
    },
    prevButton: function () {
      if (this.step !== 0) {
        this.step = this.step - 1;
      }
    },
    nextButton: function () {
      if (this.step !== 2) {
        this.step = this.step + 1;
      }
    },
    displayToolInfo: function (info, img) {
      this.toolInfo = info;
      this.viewToolInfo = true;
      this.toolImage = img;
    },
    hideToolInfo: function () {
      this.viewToolInfo = false;
    },
  },
  watch: {
    view: function (next, prev) {
      if (!prev && next) {
        this.viewDetail = false;
        this.step = 0;
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
.develop-concept-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.develop-concept-section[view] {
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
  background-color: #2979FF;;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.develop-concept-section[view] .slash {
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
  position: relative;
  top: 0;
  transition: top .5s ease-in-out;
}

.content h1 {
  color: white;
  font-size: 5rem;
  text-align: left;
  margin: 0;
  margin-bottom: -2rem;
  opacity: 0;
  bottom: .8rem;
  position: relative;
  border-bottom: 1px solid #fff;
  line-height: 5rem;
}

.develop-concept-section[view] .content h1 {
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .content h1 {
  animation-delay: 1s;
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

.AnimationWiden:nth-child(1) {
  margin-left: 0rem;
}

.AnimationWiden:nth-child(2) {
  margin-left: 5rem;
}

.AnimationWiden:nth-child(3) {
  margin-left: 10rem;
}

.develop-concept-section[view] .AnimationWiden:nth-child(1) > :not(:last-child) {
  animation: 0s visibility 1.9s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(1) > :last-child {
  animation: .4s height 1.1s ease-in-out,
             .8s width 1.5s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(2) > :not(:last-child) {
  animation: 0s visibility 2.0s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(2) > :last-child {
  animation: .4s height 1.2s ease-in-out,
             .8s width 1.6s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(3) > :not(:last-child) {
  animation: 0s visibility 2.0s;
  animation-fill-mode: forwards;
}

.develop-concept-section[view] .AnimationWiden:nth-child(3) > :last-child {
  animation: .4s height 1.2s ease-in-out,
             .8s width 1.6s ease-in-out;
  animation-fill-mode: forwards;
}

.develop-concept-section[end] .AnimationWiden:nth-child(1),
.develop-concept-section[end] .AnimationWiden:nth-child(2),
.develop-concept-section[end] .AnimationWiden:nth-child(3) {
  transition: all .4s ease-in-out;
  opacity: 0;
  top: -1rem;
}

.develop-concept-section[end] .AnimationWiden:nth-child(1) {
  transition-delay: 0s;
}
.develop-concept-section[end] .AnimationWiden:nth-child(2) {
  transition-delay: .2s;
}
.develop-concept-section[end] .AnimationWiden:nth-child(3) {
  transition-delay: .4s;
}

@keyframes visibility {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
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

.detail-button {
  width: 4rem;
  height: 4rem;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  align-self: center;
  margin-top: -2rem;
  cursor: pointer;
  transition: transform .3s ease 0s, top .3s ease 0s;
  position: relative;
  top: 0;
  opacity: 0;
}
.detail-button:hover {
  top: .4rem !important;
}
.develop-concept-section[view] .detail-button {
  animation-delay: 2.3s;
  animation-duration: .4s;
  animation-name: ViewButton;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.detail-button::after {
  content: "more";
  position: relative;
  color: white;
  font-size: 1.5rem;
  transform: rotate(-45deg);
  top: -1.5rem;
  right: 0rem;
  display: inline-block;
}

.detail .detail-button {
  transform: rotate(225deg);
}
.detail .detail-button::after {
  content: "back";
  transform: rotate(135deg);
}

.detail {
  top: -68vh;
}


@keyframes ViewButton {
  from {
    top: -.8rem;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.detail-content {
  position: absolute;
  top: 100vh;
  left: 0;
  height: 70vh;
  width: 100vw;
  transition: top .5s ease-in-out;
}

.detail .detail-content {
  top: 85vh;
}

.widget {
  background-color: #FAFBFD;
  border-radius: 8px;
  margin: 0 8rem;
  height: 100%;
  box-shadow: inset 0px 0px 11px 2px rgba(0,0,0,.6);
  overflow: hidden;
  display: flex;
}

.widget::after {
  opacity: 0;
}

.detail .widget::after {
  content: "使用技術 / ツール";
  position: absolute;
  top: -3.5rem;
  right: 8.5rem;
  font-size: 2rem;
  color: white;
  opacity: 1;
  transition: all .3s ease-in-out;
}

.widget-item {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
}

.widget-item p,
.widget-item h3,
.widget-item h4 {
  margin: 0;
}
.widget-item h4 {
  font-weight: normal;
  font-size: 3rem;
}
.widget-item p {
  font-size: 2rem;
}

.widget p {
  text-align: left;
}

.widget .prev-button,
.widget .next-button {
  height: 100%;
  width: 4rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.1);
  border-radius: 8px;
  padding-top: 10rem;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 2rem;
}
.widget .prev-button {
  left: 0;
}
.widget .next-button {
  right: 0;
}

.widget-item-wrapper {
  transition: all .8s ease-in-out;
  width: 100%;
  position: relative;
  display: flex;
}

.widget .prev-button > p,
.widget .next-button > p {
  color: white;
  text-align: left;
  font-size: 3rem;
}
.widget .prev-button > p {
  transform: rotate(-90deg);
  transform-origin: left top;
  padding-top: .5rem;
}
.widget .next-button > p {
  transform: rotate(90deg);
  transform-origin: right top;
  padding-top: 1rem;
}

.image-list {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 2rem;
}

.image-list > .image {
  width: 25rem;
  margin: 0 1rem;
}

.tool-list {
  display: flex;
}

.tool-list .image {
  width: 8rem;
  height: 8rem;
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 1.5rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.tool-list .image:hover {
  background-color: rgba(0,0,0,.1);
}

.widget-item .info {
  position: absolute;
  background-color: #FAFBFD;
  box-shadow: 1px 2px 5px 3px rgba(0,0,0,.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: auto;
}

.widget-item .info > :nth-child(1) {
  width: 40rem;
}
.widget-item .info > :nth-child(2) {
  font-size: 2rem;
  margin-top: 1rem;
}

.widget-item .info > :nth-child(3) {
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  align-self: flex-end;
  margin-right: 1rem;
}

.widget-item .info > :nth-child(3):hover {
  background-color: rgba(0,0,0,.1);
}
</style>

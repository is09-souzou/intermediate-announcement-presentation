<template>
  <section class="member-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 40"
        :style="{ flexGrow: Math.floor(Math.random() * (4 - 1 + 1) + 1), animationDelay: `.${Math.floor(Math.random() * (4 - 1 + 1) + 1)}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <h1>Member</h1>
      <div class="member-list">
        <div class="member-left">
          <div class="member">
            <my-image :src="BugfootAvatar"></my-image>
            <div>
              <p>大河戸 翔平</p>
              <p>Backend Engineer</p>
            </div>
          </div>
          <div class="member">
            <my-image :src="HasumiAvatar"></my-image>
            <div>
              <p>羽角 駿</p>
              <p>Frontend Engineer</p>
            </div>
          </div>
          <div class="member">
            <my-image :src="ItoAvatar"></my-image>
            <div>
              <p>伊藤 修平</p>
              <p>Scrum Master</p>
            </div>
          </div>
        </div>
        <div class="member-right">
          <div class="member">
            <my-image :src="RenAvatar"></my-image>
            <div>
              <p>橋本 廉</p>
              <p>Backend Engineer</p>
            </div>
          </div>
          <div class="member">
            <my-image :src="SugiyamaAvatar"></my-image>
            <div>
              <p>杉山 希望</p>
              <p>Engineer Leader</p>
            </div>
          </div>
          <div class="member">
            <my-image :src="YuitoAvatar"></my-image>
            <div>
              <p>山本 唯人</p>
              <p>Product Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import BugfootAvatar from "@/assets/bugfoot-avatar.png";
import HasumiAvatar from "@/assets/hasumi-avatar.png";
import ItoAvatar from "@/assets/ito-avatar.png";
import RenAvatar from "@/assets/ren-avatar.jpeg";
import SugiyamaAvatar from "@/assets/sugiyama-avatar.jpeg";
import YuitoAvatar from "@/assets/yuito-avatar.png";

export default {
  name: "MemberSection",
  components: {
    MyImage,
  },
  data: () => ({
    BugfootAvatar,
    HasumiAvatar,
    ItoAvatar,
    RenAvatar,
    SugiyamaAvatar,
    YuitoAvatar,
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
.member-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.member-section[view] {
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
  transform: rotate(360deg);
  transform-origin: center center;
}

.slash {
  background-color: #FF9100;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.member-section[view] .slash {
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
}

.content > h1 {
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

.member-section[view] .content > h1 {
  animation-delay: 1s;
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.member-list {
  margin: 4rem 6rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.member-list > * {
  flex-grow: 1;
}

.member {
  display: flex;
  margin: 2rem 0;
  left: -3rem;
  opacity: 0;
  animation-duration: .4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  position: relative;
}

.member > :first-child {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #FAFBFD;
}

.member > :last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  margin-left: 2rem;
}

.member > :last-child > :first-child {
  font-size: 2rem;
  margin: 0;
}

.member > :last-child > :last-child {
  font-size: 1.5rem;
  margin: 0;
}

.member-left,
.member-right {
  position: relative;
}

.member-left .member:nth-child(1) {
  margin-left: 0;
  animation-delay: 1.5s;
}

.member-left .member:nth-child(2) {
  margin-left: 8rem;
  animation-delay: 1.6s;
}

.member-left .member:nth-child(3) {
  margin-left: 16rem;
  animation-delay: 1.7s;
}

.member-right .member:nth-child(1) {
  margin-left: -16rem;
  animation-delay: 2s;
}

.member-right .member:nth-child(2) {
  margin-left: -8rem;
  animation-delay: 2.1s;
}

.member-right .member:nth-child(3) {
  margin-left: 0;
  animation-delay: 2.2s;
}

.member-section[view] .member {
  animation-name: ViewText3;
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

@keyframes ViewText3 {
  from {
    left: -3rem;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
</style>

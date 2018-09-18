<template>
  <section class="team-section">
    <div class="animation-slash-list">
      <div
        class="slash"
        v-for="n in 40"
        :style="{ flexGrow: Math.floor(Math.random() * (4 - 1 + 1) + 1), animationDelay: `.${Math.floor(Math.random() * (4 - 1 + 1) + 1)}s`}"
        :key="n"
      ></div>
    </div>
    <div class="content">
      <font-cormorant>
        <h1>Sprint Chart</h1>
      </font-cormorant>
      <div class="chart-wrapper">
        <div class="chart">
          <line-chart
            :chart-data="datacollection"
            :height="500"
            :width="800"
            :options="{responsive: false, maintainAspectRatio: true}"
          ></line-chart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "@/components/MyImage";
import FontCormorant from "@/components/font/FontCormorant";
import LineChart from "@/components/chart/LineChart";

export default {
  name: "TeamSection",
  components: {
    MyImage,
    FontCormorant,
    LineChart,
  },
  data: () => ({
    datacollection: {
      labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"],
      datasets: [
        {
          label: "Rate",
          backgroundColor: "#FFFFFFAA",
          borderColor: "#FC2525",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "white",
          data: [21, 90, 26, 82, 90],
        },
        {
          label: "Average",
          borderColor: "#05CBE1",
          pointBackgroundColor: "white",
          pointBorderColor: "white",
          borderWidth: 1,
          backgroundColor: "#3D5AFEAA",
          data: [45, 161, 34, 98, 47],
        },
        {
          label: "Max",
          borderColor: "#05CBE1",
          pointBackgroundColor: "white",
          pointBorderColor: "white",
          borderWidth: 1,
          backgroundColor: "#FF9100AA",
          data: [210, 178, 130, 120, 52],
        },
      ],
    },
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
.team-section {
  position: relative;
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.team-section[view] {
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
  transform: rotate(225deg);
  transform-origin: center center;
}

.slash {
  background-color: #00E676;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  width: 0;
  margin: -1px;
}

.team-section[view] .slash {
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

.content .chart {
  color: white;
  opacity: 0;
  bottom: .8rem;
  position: relative;
}

.team-section[view] .content h1,
.team-section[view] .content .chart {
  animation-delay: 1s;
  animation-duration: .4s;
  animation-name: ViewText2;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.team-section[view] .content h1 {
  animation-delay: 1s;
}

.team-section[view] .content .chart {
  animation-delay: 1.4s;
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

.chart-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  background-color: #FAFBFD;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1px 3px 6px 1px rgba(0,0,0,.3);
}
</style>

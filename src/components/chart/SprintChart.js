import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted: function () {
    this.renderChart({
      labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"],
      datasets: [
        {
          label: "Rate",
          backgroundColor: "#FFFFFFAA",
          data: [21, 90, 26, 82, 90],
        },
        {
          label: "Average",
          backgroundColor: "#3D5AFEAA",
          data: [45, 161, 34, 98, 47],
        },
        {
          label: "Max",
          backgroundColor: "#FF9100AA",
          data: [210, 178, 130, 120, 52],
        },
      ],
    },
    {
      responsive: true,
      maintainAspectRatio: false,
    });
  },
};

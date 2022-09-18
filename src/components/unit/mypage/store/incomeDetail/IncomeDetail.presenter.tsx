import Script from "next/script";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MyPageStoreInComeDetailUI() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const labels = [];
  for (let i = -6; i <= 0; i++) {
    labels.push(`${mm} / ${Number(dd) + i}`);
  }

  const lineChartData = {
    labels,
    datasets: [
      {
        data: [, 1, 2, 3, 4, 5, 6],
        label: "총수입",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0,
      },
      {
        data: [1, 2, 3],
        label: "Deaths",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js"></Script>

      <div>
        <Line id="myChart" width={400} height={400} data={lineChartData}></Line>
      </div>
    </>
  );
}

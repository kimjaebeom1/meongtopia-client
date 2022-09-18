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
import { IMyPageStoreInComeDetailUIProps } from "./IncomeDetail.types";
import * as IncomeDetail from "./IncomeDetail.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MyPageStoreInComeDetailUI(
  props: IMyPageStoreInComeDetailUIProps
) {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const labels = [];
  for (let i = -6; i <= 0; i++) {
    labels.push(`${mm} / ${Number(dd) + i}`);
  }

  const totalCashes = [
    ...(props.data?.fetchStoreIncome.map((el: any) => el.totalCash) || ""),
  ];

  if (totalCashes.length < 7) {
    for (let i = totalCashes.length; i < 7; i++) {
      totalCashes.unshift(0);
    }
  }

  if (totalCashes.length > 7) {
    for (let i = 7; i < totalCashes.length; i++) {
      totalCashes.shift();
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      // title: {
      //   display: true,
      //   text: `${props.data?.fetchStoreIncome[0].store.name}`,
      // },
    },
  };

  const lineChartData = {
    labels,
    datasets: [
      {
        data: totalCashes,
        label: "총수입",
        borderColor: "orange",
        fill: true,
        lineTension: 0,
      },
      // {
      //   data: [1, 2, 3],
      //   label: "Deaths",
      //   borderColor: "#ff3333",
      //   backgroundColor: "rgba(255, 0, 0, 0.5)",
      //   fill: true,
      //   lineTension: 0.5,
      // },
    ],
  };

  return (
    <IncomeDetail.Wrapper>
      <IncomeDetail.Title>
        {props.data?.fetchStoreIncome[0].store.name}
      </IncomeDetail.Title>
      <div style={{ width: 770 }}>
        <Line options={options} data={lineChartData} />
      </div>
    </IncomeDetail.Wrapper>
  );
}

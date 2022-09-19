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

  for (let i = -7; i < 0; i++) {
    labels.push(`${mm} / ${Number(dd) + i}`);
  }

  let totalCashes = [
    ...(props.data?.fetchStoreIncome.map((el: any) => el.totalCash) || []),
  ];

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
    labels: props.data?.fetchStoreIncome.map((el) => el.date),
    datasets: [
      {
        data: totalCashes,
        label: "총수입",
        borderColor: "orange",
        backgroundColor: "orange",
        fill: true,
        lineTension: 0,
      },
    ],
  };

  return (
    <IncomeDetail.Wrapper>
      <IncomeDetail.Title>
        {props.data?.fetchStoreIncome[0].store.name}
      </IncomeDetail.Title>
      <IncomeDetail.Chart>
        <Line options={options} data={lineChartData} />
      </IncomeDetail.Chart>
    </IncomeDetail.Wrapper>
  );
}

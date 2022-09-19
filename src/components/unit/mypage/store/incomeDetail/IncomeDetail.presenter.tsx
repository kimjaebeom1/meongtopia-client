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
  let date = [...(props.data?.fetchStoreIncome.map((el) => el.date) || [])];

  if (date.length > 7) {
    for (let i = 7; i < date.length; i++) {
      date.shift();
    }
  }

  let totalCashes = [
    ...(props.data?.fetchStoreIncome.map((el) => el.totalCash) || []),
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
    labels: date,
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

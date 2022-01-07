import Chart from "react-apexcharts";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "react-query";
import { getExchange } from "../api";

const init = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

type TypeExchang = {
  exchange_id: string;
  exchange_name: string;
  pair: string;
  base_currency_id: string;
  base_currency_name: string;
  quote_currency_id: string;
  quote_currency_name: string;
  market_url: string;
  category: string;
  fee_type: string;
  outlier: boolean;
  adjusted_volume_24h_share: number;
  quotes: { USD: { price: number; valume_24h: number } };
  trust_score: string;
  last_updated: string;
};

const Exchange = () => {
  const { id } = useOutletContext<{ id: string }>();
  const { isLoading, data } = useQuery<TypeExchang[]>(["exchange", id], () =>
    getExchange(id)
  );

  if (isLoading) {
    return <div>"isLoading..."</div>;
  } else {
    return (
      <Chart
        options={{
          chart: {
            type: "line",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            labels: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          tooltip: {
            theme: "dark",
            x: {
              show: false,
            },
            y: {
              formatter: (v) => v.toFixed(0),
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "horizontal",
              gradientToColors: ["white"],
              stops: [0, 70],
            },
          },
          colors: ["#636e72"],
        }}
        series={[
          {
            data: data
              ?.map((v) => (v.quotes ? v.quotes.USD.price : 0))
              .slice(0, 50),
            name: "USD",
          },
        ]}
        x
      />
    );
  }
};

export default Exchange;

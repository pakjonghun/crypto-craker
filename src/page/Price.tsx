import Chart from "react-apexcharts";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "react-query";
import { getMarket } from "../api";

type TypePrice = {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
};

type TypeError = {
  error: string;
};

type Data = { name: string; data: number[] };
type TypeChart = Data[];

const Price = () => {
  const { id } = useOutletContext<{ id: string }>();
  const { isLoading, data } = useQuery<TypePrice[] | TypeError>(
    ["exchange", id],
    () => getMarket(id)
  );

  if (!isLoading && !Array.isArray(data)) {
    return <div className="text-center text-red-500 mt-10">Error..</div>;
  }

  if (isLoading) {
    return <div className=" mt-10">"isLoading..."</div>;
  } else {
    return (
      <>
        {Array.isArray(data) && (
          <Chart
            options={{
              chart: {
                type: "line",
                zoom: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              grid: {
                row: {
                  colors: ["gray", "white"],
                  opacity: 0.2,
                },
              },
              tooltip: {
                y: {
                  formatter: (v) => v.toFixed(0),
                },
                x: {
                  show: false,
                },
              },
              xaxis: {
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                },
                categories: data.map((i) => i.time_open),
                type: "datetime",
              },
              yaxis: {
                show: false,
              },
              fill: {
                type: "gradient",

                gradient: {
                  gradientToColors: ["#ffeaa7", "#55efc4"],
                  type: "horizontal",
                  stops: [10, 90],
                },
              },
              legend: {
                fontSize: "16px",
                fontWeight: "500",
                itemMargin: {
                  horizontal: 5,
                },
                labels: {
                  colors: "white",
                },
              },
              colors: ["#fdcb6e", "#00b894"],
            }}
            series={data?.reduce<TypeChart>(
              (pre, cur) => [
                { name: "close", data: [...pre[0].data, cur.close] },
                { name: "open", data: [...pre[1].data, cur.open] },
              ],
              [
                { name: "close", data: [] },
                { name: "open", data: [] },
              ]
            )}
          />
        )}
      </>
    );
  }
};

export default Price;

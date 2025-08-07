"use client";

import {
  Bar,
  BarChart,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartHeader from "./ChartHeader";

const data = [
  { name: "JAN", uv: 650, pv: 720, amt: 2400 },
  { name: "FEB", uv: 350, pv: 450, amt: 2400 },
  { name: "MAR", uv: 550, pv: 460, amt: 0 },
  { name: "APR", uv: 360, pv: 530, amt: 0 },
  { name: "MAY", uv: 490, pv: 580, amt: 0 },
  { name: "JUN", uv: 650, pv: 850, amt: 0 },
  { name: "JUL", uv: 600, pv: 600, amt: 0 },
  { name: "AUG", uv: 470, pv: 600, amt: 0 },
  { name: "SEP", uv: 330, pv: 470, amt: 0 },
  { name: "OCT", uv: 490, pv: 700, amt: 0 },
  { name: "NOV", uv: 380, pv: 300, amt: 0 },
  { name: "DEC", uv: 510, pv: 600, amt: 0 },
];

const chartConfig = {
  market: {
    label: "Market",
    color: "#2563eb",
  },
  purchase: {
    label: "Purchase",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <ChartHeader />
      <ChartContainer
        config={chartConfig}
        className="min-h-[224px] w-full bg-white rounded-md"
      >
        <BarChart
          accessibilityLayer
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tick={{ stroke: "#E6E6E7" }}
            axisLine={false}
            axisType={"yAxis"}
            tickLine={false}
          />

          <Tooltip active cursor={false} />

          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="pv"
            fill="#F1F1F2"
            activeBar={<Rectangle fill="ffb800" />}
          />
          <Bar
            dataKey="uv"
            fill="#E6E6E7"
            activeBar={<Rectangle fill="ff8600" />}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

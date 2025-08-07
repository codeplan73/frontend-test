import { CartesianGrid, Line, LineChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },

  {
    name: "Page E",
    uv: 18490,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 1920,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 0,
  },
];

export const LineChat = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#FFB800" strokeWidth={2} />
        <CartesianGrid vertical={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

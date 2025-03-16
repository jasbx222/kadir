import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 75 },
  { name: "May", value: 90 },
  { name: "Jun", value: 110 },
];

const LineChartComponent = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold text-center mb-4">Monthly Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;

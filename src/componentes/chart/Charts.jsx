import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const data = [
  { name: "اذار", المبيعات: 4000 },
  { name: "فبراير", المبيعات: 3000 },
  { name: "يناير", المبيعات: 5000 },
  { name: "اوكتوبر", المبيعات: 13000 },
  { name: "مارس", المبيعات: 6000 },
  { name: "يونيو", المبيعات: 8000 },
  { name: "اوغسطس", المبيعات: 12000 },
];

const ChartComponent = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center p-4">
      <div className="w-full max-w-4xl aspect-[16/9] min-h-[300px]">
        <ResponsiveContainer width="80%" height="80%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="المبيعات" 
              fill="#8884d8" 
              barSize={window.innerWidth < 768 ? 20 : 50} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;

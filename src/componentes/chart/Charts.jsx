import React, { useEffect, useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import axios from "axios";

const ChartComponent = () => {
  const url = import.meta.env.VITE_URL_API;
  const [monthlyOrders, setMonthlyOrders] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}admin/v1/home`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // Reformat the data to an array with {name: '2025-03', value: 4}
        const formattedData = Object.entries(res.data.monthlyOrders).map(([name, value]) => ({
          name,
          monthlyOrders: value,
        }));

        setMonthlyOrders(formattedData); // Set the formatted data
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    };

    fetchData();
  }, [url, token]);

  return (
    <div className="w-full h-auto flex justify-center items-center p-4">
      <div className="w-full max-w-4xl aspect-[16/9] min-h-[300px]">
        <ResponsiveContainer width="90%" height="90%">
          <BarChart 
            data={monthlyOrders} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="monthlyOrders" 
              fill="#2A3890" 
              barSize={window.innerWidth < 768 ? 20 : 50} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;

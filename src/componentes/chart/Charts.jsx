import React, { useEffect, useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import axios from "axios";
import { HeartCrack } from "lucide-react";


const ChartComponent = () => {
  const url = import.meta.env.VITE_URL_API;
  const [monthlyOrders, setMonthlyOrders] = useState([]);
  const  token=localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/home`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });


        const formattedData = Object.entries(res.data.monthlyOrders).map(([name, value]) => ({
          name,
          monthlyOrders: value,
        }));

        setMonthlyOrders(formattedData); 
      } catch (error) {
        console.error("Error fetching Chart info:", error);
      }
    };

    fetchData();
  }, []);
console.log(monthlyOrders)
  return (
<div>
{ monthlyOrders.length > 0 ? (
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
    ):(    
    <div className="flex items-center justify-center  px-4">
      <div className="text-center">
        <h1 className="text-9xl flex justify-center items-center  font-bold text-blue-500">
        <HeartCrack size={60}/>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
      لايوجد  طلبات
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
    
          عذراً، لم يتم العثور على أي طلبات حالياً.
        </p>

       
      </div>
    </div>)
  }
</div>
  );
};

export default ChartComponent;

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import ReportsFunctions from "./ReportsFunctions";
import axios from "axios";

const ReportPage = () => {
  const url = import.meta.env.VITE_URL_API;
  const [orders, setOrders] = useState([]);
const token =localStorage.getItem('token')
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${url}admin/v1/report`,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }); 
        setOrders(response.data || []);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, [url]); // Dependency array added to avoid infinite loop

  const exportOrders = () => {
    if (orders.length === 0) return;
    
    const data = orders.map(order => ({
      "رقم الطلب": order.id,
      "الحرفي": order.professional || "غير متوفر",
      "تاريخ الإنشاء": order.created_at,
      "آخر تحديث": order.updated_at
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "تقرير الطلبات");
    XLSX.writeFile(workbook, "تقرير_الطلبات.xlsx");
  };

  return (
    <div className="container md:relative md:left-20" style={{ width: "80%" }}>
      <ReportsFunctions exportOrders={exportOrders} orders={orders} />
    </div>
  );
};

export default ReportPage;

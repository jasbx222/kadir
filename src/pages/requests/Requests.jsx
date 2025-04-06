import React, { useEffect, useMemo, useState } from "react";

import * as XLSX from "xlsx";
import "./Request.css";

import RequestTable from "./RequestTable";

const Requests = () => {
  const url = import.meta.env.VITE_URL_API;
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}/order`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("فشل في جلب البيانات");
      }

      const data = await response.json();

      const uniqueProfessionals = {};
      data.data.forEach((order) => {
        const prof = order.professional;
        if (prof && !uniqueProfessionals[prof.id]) {
          uniqueProfessionals[prof.id] = {
            ...prof,
            orderId: order.id,
            price: order.price,
            description: order.description,
            created_at: order.created_at,
          };
        }
      });

      const sortedOrders = Object.values(uniqueProfessionals).sort(
        (a, b) => (b.connection_count || 0) - (a.connection_count || 0)
      );

      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      orders.map((order) => ({
        "اسم مقدم الخدمة": order.name || "غير متوفر",
        "عدد مرات الاتصال": order.connection_count || 0,
        "المنطقة": order.address || "لا يوجد عنوان",
        "القسم": order.category.name || "غير متوفر",
        "رقم الطلب": order.orderId || "غير متوفر",
        "العنوان ": order.address || "غير متوفر",
        "رقم الهاتف": order.phone1 || "غير متوفر",
        "تاريخ الطلب": order.created_at || "لا يوجد تاريخ",
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "طلبات.xlsx");
  };
console.log(orders)
  return (
   <RequestTable
      orders={orders} 
      exportToExcel={exportToExcel}
   
   
      />
  );
};

export default Requests;

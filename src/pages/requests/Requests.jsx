import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./Request.css";
import RequestTable from "./RequestTable";

const Requests = () => {
  const url = import.meta.env.VITE_URL_API;
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const token = localStorage.getItem("token");
  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}/order`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      setFilteredOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    filterByDate();
  }, [fromDate, toDate]);

  const filterByDate = () => {
    if (!fromDate || !toDate) {
      setFilteredOrders(orders);
      return;
    }

    const from = new Date(fromDate);
    from.setHours(0, 0, 0, 0);

    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);

    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.created_at);
      return orderDate >= from && orderDate <= to;
    });

    setFilteredOrders(filtered);
  };

  const exportToExcel = () => {
    const from = new Date(fromDate);
    from.setHours(0, 0, 0, 0);

    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);

    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.created_at);
      return orderDate >= from && orderDate <= to;
    });

    if (filtered.length === 0) {
      swal({
        title: "لا توجد بيانات",
        text: "لا توجد طلبات في هذا النطاق الزمني.",
        icon: "warning",
        button: "حسناً",
      });
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      filtered.map((order) => ({
        "اسم مقدم الخدمة": order.name || "غير متوفر",
        "عدد مرات الاتصال": order.connection_count || 0,
        "المنطقة": order.address || "لا يوجد عنوان",
        "القسم": order.category?.name || "غير متوفر",
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

  return (
    <RequestTable
      orders={filteredOrders}
      fromDate={fromDate}
      filterByDate={filterByDate}
      setFromDate={setFromDate}
      toDate={toDate}
      setToDate={setToDate}
      exportToExcel={exportToExcel}
      setOrders={setOrders}
      setFilteredOrders={setFilteredOrders}
    />
  );
};

export default Requests;



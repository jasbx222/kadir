import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import "./Request.css";
import { Eye } from "lucide-react";

const Requests = () => {
  const url = import.meta.env.VITE_URL_API;
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}admin/v1/order`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setOrders(data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      orders.map(order => ({
        "اسم مقدم الخدمة": order.professional.name,
        "تاريخ وقت العملية": order.created_at,
        "عدد مرات الاتصال": order.professional.connection_count,
        "السعر": order.professional.price,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "طلبات.xlsx");
  };

  return (
    <div className="request relative md:left-28 overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white w-full max-w-6xl mx-auto">
      <button 
        onClick={exportToExcel} 
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        تصدير إلى Excel
      </button>
    {
      orders.length > 0 ? (  <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg overflow-hidden">
        <caption className="p-5 text-lg font-semibold text-gray-900 rounded-t-lg">
          الطلبات
        </caption>
        <thead className="text-xs text-gray-600 uppercase bg-gray-100">
          <tr>
            <th className="px-4 py-3">اسم مقدم الخدمة</th>
            <th className="px-4 py-3">تاريخ وقت العملية</th>
            <th className="px-4 py-3">عدد مرات الاتصال</th>
            <th className="px-4 py-3"> المنطقة</th>
            <th className="px-4 py-3">السعر</th>
            <th className="px-4 py-3 text-center">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((r) => (
            <tr key={r.id} className="bg-white border-b hover:bg-gray-100 transition">
              <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">{r.professional.name}</td>
              <td className="px-4 py-4 whitespace-nowrap">{r.created_at}</td>
              <td className="px-4 py-4 whitespace-nowrap">{r.professional.connection_count}</td>
              <td className="px-4 py-4 whitespace-nowrap">{r.professional.address}</td>
              <td className="px-4 py-4 whitespace-nowrap">{r.professional.price}</td>
              <td className="px-4 py-4 flex justify-center items-center gap-4 text-lg">
                <Link to={`/ShowOrder/${r.id}`} className="text-blue-600 hover:text-blue-800 transition">
                  <Eye />
                </Link>
                <Link to={`/delet_order/${r.id}`} className="text-red-500 hover:text-red-700 transition">
                  <MdDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>):(<div className="text-center text-red-600">لا توجد طلبات حالياً</div>)
    }
    </div>
  );
};

export default Requests;

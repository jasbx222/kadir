import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
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

      if (!response.ok) {
        throw new Error("فشل في جلب البيانات");
      }

      const data = await response.json();

      const uniqueProfessionals = {};
      data.data.forEach((order) => {
        const profId = order.professional?.id;
        if (profId && !uniqueProfessionals[profId]) {
          uniqueProfessionals[profId] = order.professional;
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
        المنطقة: order.address || "لا يوجد عنوان",
        السعر: order.price || "0 د.ع",
        الوصف: order.description || "لا يوجد وصف",
        "تاريخ الطلب": order.created_at || "لا يوجد تاريخ",
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
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        تصدير إلى Excel
      </button>
      {orders.length > 0 ? (
        <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg overflow-hidden">
          <caption className="p-5 text-lg font-semibold text-gray-900 rounded-t-lg">
            الطلبات
          </caption>
          <thead className="text-xs text-gray-600 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">اسم مقدم الخدمة</th>
              <th className="px-4 py-3">عدد مرات الاتصال</th>
              <th className="px-4 py-3">المنطقة</th>
              <th className="px-4 py-3">السعر</th>
              <th className="px-4 py-3 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((r) => (
              <tr
                key={r.id}
                className="bg-white border-b hover:bg-gray-100 transition"
              >
                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {r.name || "غير متوفر"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {r.connection_count}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {r.address || "لا يوجد عنوان"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {r.price || "0 د.ع"}
                </td>
                <td className="px-4 py-4 flex justify-center items-center gap-4 text-lg">
                  <Link
                    to={`/ShowOrder/${r.id}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <Eye />
                  </Link>
                  <Link
                    to={`/delet_order/${r.id}`}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-red-600">لا توجد طلبات حالياً</div>
      )}
    </div>
  );
};

export default Requests;

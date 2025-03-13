import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa";
import { reportsData } from "./reportsData";
const ReportPage = () => {
  const [orders] = useState(
    reportsData
);

  // تصدير التقرير حسب الحرفي
  const exportOrdersByArtisan = () => {
    const data = orders.map(order => ({
      "رقم الطلب": order.id,
      "الحرفي": order.artisan,
      "القسم": order.department,
      "الفرع": order.branch,
      "الإجمالي": order.total
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "تقرير الطلبات");
    XLSX.writeFile(workbook, "تقرير_الطلبات.xlsx");
  };

  // تصدير التقرير حسب القسم
  const exportOrdersByDepartment = () => {
    const data = orders.reduce((acc, order) => {
      const key = `${order.department}-${order.branch}`;
      if (!acc[key]) acc[key] = { "القسم": order.department, "الفرع": order.branch, "الإجمالي": 0 };
      acc[key]["الإجمالي"] += order.total;
      return acc;
    }, {});

    const formattedData = Object.values(data);
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "إجمالي الطلبات");
    XLSX.writeFile(workbook, "إجمالي_الطلبات.xlsx");
  };

  return (
    <div className="p-8  min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold mb-6 text-red-500">📊 صفحة التقارير</h1>
      <div className="flex space-x-6">
        <button
          onClick={exportOrdersByArtisan}
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          <FaFileExcel className="mr-2 text-2xl" /> تصدير تقرير الطلبات حسب الحرفي
        </button>
        <button
          onClick={exportOrdersByDepartment}
          className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg"
        >
          <FaFileExcel className="mr-2 text-2xl" /> تصدير تقرير إجمالي الطلبات حسب القسم
        </button>
      </div>
    </div>
  );
};

export default ReportPage;

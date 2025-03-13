import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa";

const ReportPage = () => {
  const [orders] = useState([
    { id: 1, artisan: "حرفي 1", department: "قسم 1", branch: "فرع 1", total: 200 },
    { id: 2, artisan: "حرفي 2", department: "قسم 1", branch: "فرع 2", total: 150 },
    { id: 3, artisan: "حرفي 1", department: "قسم 2", branch: "فرع 1", total: 300 },
  ]);

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

  const exportOrdersByDepartment = () => {
    const departmentTotals = orders.reduce((acc, order) => {
      acc[order.department] = acc[order.department] || {};
      acc[order.department][order.branch] =
        (acc[order.department][order.branch] || 0) + order.total;
      return acc;
    }, {});

    const data = [];
    Object.entries(departmentTotals).forEach(([department, branches]) => {
      Object.entries(branches).forEach(([branch, total]) => {
        data.push({ "القسم": department, "الفرع": branch, "الإجمالي": total });
      });
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "إجمالي الطلبات");
    XLSX.writeFile(workbook, "إجمالي_الطلبات.xlsx");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">📊 صفحة التقارير</h1>
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

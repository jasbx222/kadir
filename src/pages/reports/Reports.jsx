import React, { useState } from "react";
import * as XLSX from "xlsx";
import { reportsData } from "./reportsData";
import ReportsTable from "./ReportsTable";
import ReportsFunctions from "./ReportsFunctions";

const ReportPage = () => {
  const [orders] = useState(reportsData);

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

    <div
      className="
      container
      md:relative
    md:left-20
      "
      style={{
        width: "80%",
      }}
    >
    <ReportsFunctions exportOrdersByArtisan={exportOrdersByArtisan} exportOrdersByDepartment={exportOrdersByDepartment} orders={orders}/>

    </div>
  );
};

export default ReportPage;

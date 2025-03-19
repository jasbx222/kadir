import { FaFileExcel } from "react-icons/fa";
import ReportsTable from "./ReportsTable";
const ReportsFunctions = ({
    exportOrdersByArtisan,
    exportOrdersByDepartment,
    orders
}) => {
  return (
    <div className="p-4 sm:p-8 min-h-screen flex flex-col items-center bg-gray-100 w-full">
    <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6 px-2 sm:px-8">
      <h1 className="text-xl sm:text-3xl font-extrabold text-blue-700 mb-4 sm:mb-0">📊 صفحة التقارير</h1>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={exportOrdersByArtisan}
          className="flex items-center bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg w-full sm:w-auto"
        >
          <FaFileExcel className="mr-2 text-lg sm:text-2xl" /> تصدير الطلبات حسب الحرفي
        </button>
        <button
          onClick={exportOrdersByDepartment}
          className="flex items-center bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg w-full sm:w-auto"
        >
          <FaFileExcel className="mr-2 text-lg sm:text-2xl" /> تصدير حسب القسم
        </button>
      </div>
    </div>
    <div className="overflow-x-auto w-full max-w-6xl">
      
    <ReportsTable orders={orders}/>

    </div>
  </div>
  )
}

export default ReportsFunctions
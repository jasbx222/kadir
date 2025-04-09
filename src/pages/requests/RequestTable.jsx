import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";

const RequestTable = ({
  orders,
  fromDate,
  setFromDate,
  filterByDate,
  toDate,
  setToDate,
  exportToExcel,
}) => {
  return (
    <div className="request relative top-24 md:left-36 shadow-md rounded-lg p-4 bg-white w-full max-w-6xl mx-auto">
   
      <div className="filters relative  right-44 md:right-0 sm:right-0 flex flex-col sm:flex-row flex-wrap gap-4 mb-6 items-start sm:items-center">
        <label className="flex flex-col text-sm text-gray-700">
          من تاريخ:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="mt-1 border rounded px-2 py-1"
          />
        </label>

        <label className="flex flex-col text-sm text-gray-700">
          إلى تاريخ:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="mt-1 border rounded px-2 py-1"
          />
        </label>

        <button
          onClick={exportToExcel}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-white mt-2 sm:mt-6"
        >
          تصدير إلى Excel
        </button>
        <button
          onClick={filterByDate}
          className=" text-white px-4 py-2 rounded  mt-2 sm:mt-6 hover:bg-white bg-blue-500  "
        >
 تطبيق الفلتر
        </button>
      </div>

      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg">
            <caption className="p-5 text-lg font-semibold text-gray-900 bg-white">
              الطلبات
            </caption>
            <thead className="text-xs text-gray-600 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-3">اسم مقدم الخدمة</th>
                <th className="px-4 py-3">عدد مرات الاتصال</th>
                <th className="px-4 py-3">العنوان</th>
                <th className="px-4 py-3">القضاء</th>
                <th className="px-4 py-3">القسم</th>
                <th className="px-4 py-3 text-center">الحذف</th>
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
                    {r.city?.name || "لا يوجد عنوان"}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {r.category?.name || "غير متوفر"}
                  </td>
                
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <Link to={`/delete_order/${r.orderId}`}>
                      <MdDelete
                        className="text-red-500 hover:text-red-300"
                        size={20}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default RequestTable;

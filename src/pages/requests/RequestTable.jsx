import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";
const RequestTable = (
  { orders, exportToExcel }
) => {
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
            <th className="px-4 py-3">العنوان</th>
            <th className="px-4 py-3">القضاء</th>
            <th className="px-4 py-3">القسم</th>
            <th className="px-4 py-3">رقم الطلب</th>
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
                {r.city.name || "لا يوجد عنوان"}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                {r.category.name || "غير متوفر"}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                {r.orderId ||   "غير متوفر"}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-center">
                <Link to={`/delete_order/${r.orderId}`}>
                  <MdDelete className="text-red-500 hover:text-red-300" size={20} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
  <div className="flex justify-center items-center">
  <Loading/>
    </div>
    )}
  </div>
  )
}

export default RequestTable
import React from 'react'

const ReportsTable = ({orders}) => {
  return (
    <table className="w-full border-collapse bg-white shadow-lg rounded-lg text-xs sm:text-base">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2 sm:p-3">رقم الطلب</th>
              <th className="p-2 sm:p-3">الحرفي</th>
              <th className="p-2 sm:p-3">القسم</th>
              <th className="p-2 sm:p-3">الفرع</th>
              <th className="p-2 sm:p-3">الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-200">
                <td className="p-2 sm:p-3">{order.id}</td>
                <td className="p-2 sm:p-3">{order.professional}</td>
                <td className="p-2 sm:p-3">{order.created_at}</td>
                <td className="p-2 sm:p-3">{order.updated_at}</td>
                <td className="p-2 sm:p-3 font-bold text-green-600">{order.total}</td>
             
              </tr>
              
            ))}
    <tr className="text-center bg-gray-200 font-bold">
              <td className="p-2 sm:p-3" colSpan="4">المجموع الكلي</td>
              <td className="p-2 sm:p-3 text-red-600">{orders.length}</td>
            </tr>
          
          </tbody>
        </table>
  )
}

export default ReportsTable
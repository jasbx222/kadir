import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPen, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { requestData } from "./requestData";
import "./Request.css";

const Requests = () => {
  return (
    <div className=" request relative md:left-28 overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white w-full max-w-6xl mx-auto">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg overflow-hidden">
        <caption className="p-5 text-lg font-semibold text-gray-900 rounded-t-lg">
          الطلبات
        </caption>
        <thead className="text-xs text-gray-600 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-4 py-3">
              اسم مقدم الخدمة
            </th>
            <th scope="col" className="px-4 py-3">
              تاريخ وقت العملية
            </th>
            <th scope="col" className="px-4 py-3">
              عدد مرات الاتصال
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody>
          {requestData.map((r) => (
            <tr
              key={r.id}
              className="bg-white border-b hover:bg-gray-100 transition"
            >
              <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                {r.service_provider_name}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                {r.operation_date_time}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                {r.number_of_calls}
              </td>
              <td className="px-4 py-4 flex justify-center items-center gap-4 text-lg">
                <Link
                  to={`/requestid/${r.id}`}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaPen />
                </Link>
                <Link
                  to="#"
                  className="text-green-500 hover:text-green-700 transition"
                >
                  <FaRegEye />
                </Link>
                <Link
                  to="#"
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <MdDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-5 mb-5">
      </div>
    </div>
  );
};

export default Requests;

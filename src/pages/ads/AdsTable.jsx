import { Eye, PenLine, Trash2 } from "lucide-react";
import React from "react";

const AdsTable = ({ ads }) => {
  return (
    <div className="overflow-x-auto mt-4 ml-5">
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3">عنوان الإعلان</th>
            <th className="border border-gray-300 p-3">التفاصيل</th>
            <th className="border border-gray-300 p-3">التاريخ</th>
            <th className="border border-gray-300 p-3">الصورة</th>
            <th className="border border-gray-300 p-3">الاجرائات</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 p-3">{ad.title}</td>
              <td className="border border-gray-300 p-3">{ad.details}</td>
              <td className="border border-gray-300 p-3">{ad.date}</td>
              <td className="border border-gray-300 p-3">
                {ad.image && (
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-20 h-20 mx-auto object-cover rounded-lg"
                  />
                )}
              </td>
              <td className="border  border-gray-300 p-2">
                  <button
             
                    className="bg-red-500 text-white px-2 py-1 m-2 rounded"
                  >
      <Trash2 />
                  </button>
                  <button
                   
                    className="bg-blue-400 text-white px-2 m-2 py-1 rounded"
                  >
<PenLine />
                  </button>
                  <button
                   
                    className="bg-green-300 text-white px-2 m-2 py-1 rounded"
                  >
      <Eye />
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdsTable;

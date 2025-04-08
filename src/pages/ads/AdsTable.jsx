import { Eye, PenLine, Trash2 } from "lucide-react";
import GetInfo from "../../componentes/methode/GetInfo";
import { Link } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";

const AdsTable = () => {
  const url = import.meta.env.VITE_URL_API;
  const ads = GetInfo(`${url}/ads`);

  return (
    <div className="mt-4 ml-5 w-[100%] md:ml-2">
      {ads && ads.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-center text-sm md:text-base">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 md:p-3">عنوان الإعلان</th>
                <th className="border border-gray-300 p-2 md:p-3">النوع</th>
                <th className="border border-gray-300 p-2 md:p-3">انتهاء الصلاحية</th>
                <th className="border border-gray-300 p-2 md:p-3">الصورة</th>
                <th className="border border-gray-300 p-2 md:p-3">الإجرائات</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2 md:p-3">{ad.title}</td>
                  <td className="border border-gray-300 p-2 md:p-3">{ad.type}</td>
                  <td className="border border-gray-300 p-2 md:p-3">{ad.expire_date}</td>
                  <td className="border border-gray-300 p-2 md:p-3">
                    {ad.image && (
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto object-cover rounded-lg"
                      />
                    )}
                  </td>
                  <td className="border border-gray-300 p-2 flex justify-center flex-wrap gap-2">
                    <Link to={`/delete/ads/${ad.id}`}>
                      <button className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center">
                        <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </Link>
                    <Link to={`/update/ads/${ad.id}`}>
                      <button className="bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center">
                        <PenLine className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </Link>
                    <Link to={`/view/ads/${ad.id}`}>
                      <button className="bg-green-500 text-white px-2 py-1 rounded flex items-center justify-center">
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default AdsTable;

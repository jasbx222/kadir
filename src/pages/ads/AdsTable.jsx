import { Eye, PenLine, Trash2 } from "lucide-react";
import GetInfo from "../../componentes/methode/GetInfo";
import { Link } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";
const AdsTable = () => {
  const url = import.meta.env.VITE_URL_API
  const ads = GetInfo(`${url}/ads`);
  return (
    <div className=" mt-4 ml-5 md:ml-2">
 {
  ads && ads.length > 0 ? (   <table className="w-full border-collapse border border-gray-300 text-center">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 p-3">عنوان الإعلان</th>
        <th className="border border-gray-300 p-3">النوع</th>
        <th className="border border-gray-300 p-3">  انتهاء الصلاحية</th> 
        
        <th className="border border-gray-300 p-3">الصورة</th>
        <th className="border border-gray-300 p-3">الاجرائات</th>
      </tr>
    </thead>
    <tbody>
      {ads.map((ad, index) => (
        <tr key={index} className="border border-gray-300">
          <td className="border border-gray-300 p-3">{ad.title}</td>
          <td className="border border-gray-300 p-3">{ad.type}</td>
          <td className="border border-gray-300 p-3">{ad.expire_date}</td>
          {/* <td className="border border-gray-300 p-3">{ad.date}</td>  */}
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
            <button className="bg-red-500 text-white px-2 py-1 m-2 rounded">
              <Link to={`/delete/ads/${ad.id}`}>
                <Trash2 />
              </Link>
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 m-2 rounded">
              <Link to={`/update/ads/${ad.id}`}>
                <PenLine />
              </Link>
            </button>

            <button className="bg-green-300 text-white px-2 m-2 py-1 rounded">
              <Link to={`/view/ads/${ad.id}`}>
                <Eye />
              </Link>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>):(
 <div className="flex justify-center items-center">
 <Loading/>
   </div>
  )
 }
    </div>
  );
};

export default AdsTable;

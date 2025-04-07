import { Link, useNavigate, useParams } from "react-router-dom";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";
import { FaLeftLong } from "react-icons/fa6";
import { Image } from "lucide-react";

const GetById_Pro = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const prof = GetByIdInfo(`${url}/professional`, id);
  const nav = useNavigate();

  return (
    <div dir="ltr">
      {prof && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 overflow-auto">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">تفاصيل الحرفي</h2>
              <button
                onClick={() => nav('/professional')}
                className="text-red-600 hover:text-gray-700 transition text-lg flex items-center gap-2"
              >
                <FaLeftLong />
                <span>رجوع</span>
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src={prof.image}
                alt={prof.name}
                className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
              />

              <div className="text-gray-700 w-full text-right space-y-3 text-sm sm:text-base">
                <p><strong>الاسم:</strong> {prof.name}</p>
                <p><strong>المحافظة:</strong> {prof.city.name}</p>
                <p><strong>التصنيف:</strong> {prof.category.name}</p>
                <p><strong>الخدمة المقدمة:</strong> {prof.service_name}</p>
                <p><strong>السعر:</strong> {prof.price} د.ع</p>
                <p><strong>الوصف:</strong> {prof.description}</p>
                <p><strong>العنوان:</strong> {prof.address}</p>
                <p><strong>تفاصيل العنوان:</strong> {prof.address_details}</p>
                <p className="text-sm text-red-500"><strong>تاريخ انتهاء الاشتراك:</strong> {prof.expire_date}</p>
              </div>

              <Link
                to={`/image/${prof.id}`}
                className="mt-4 bg-slate-700 text-white hover:bg-white hover:text-black border border-slate-700 transition rounded-xl px-6 py-2 flex items-center gap-2 font-bold"
              >
                <Image size={20} />
                صور خدمات الحرفي
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetById_Pro;

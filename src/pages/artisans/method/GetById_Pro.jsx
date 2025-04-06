import { Link, useNavigate, useParams } from "react-router-dom";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";
import { FaLeftLong } from "react-icons/fa6";
import { Image } from "lucide-react";

const GetById_Pro = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const prof = GetByIdInfo(`${url}/professional`, id);
const nav=useNavigate()
  return (
    <div dir="ltr">
      {prof && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <button className="
               top-4 text-red-500  hover:text-gray-700 focus:outline-none"
              onClick={()=>nav('/professional')}
            >
            <FaLeftLong/>
           رجوع
            </button>

            <h2 className="text-lg font-bold mb-4">تفاصيل الحرفي</h2>


            <img
              src={prof.image}
              alt={prof.name}
              className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 mb-4"
            />

            <div className="text-gray-700 text-right">
           
              <p className="border-b py-2"><strong>الاسم:</strong> {prof.name}</p>
              <p className="border-b py-2"><strong>المحافظة:</strong> {prof.city.name}</p>
              <p className="border-b py-2"><strong>التصنيف:</strong> {prof.category.name}</p>
              <p className="border-b py-2"><strong>الخدمة المقدمة:</strong> {prof.service_name}</p>
              <p className="border-b py-2"><strong>السعر:</strong> {prof.price} د.ع</p>
              <p className="border-b py-2"><strong>الوصف:</strong> {prof.description}</p>
              <p className="border-b py-2"><strong>العنوان:</strong> {prof.address}</p>
              <p className="border-b py-2"><strong>تفاصيل العنوان:</strong> {prof.address_details}</p>
              <p className="text-sm text-red-400 mt-4"><strong>تاريخ انتهاء الاشتراك:</strong> {prof.expire_date}</p>
             
              <p className="text-sm text-gray-900 bg-slate-400 rounded-lg h-[50px] hover:bg-white mt-4 font-bold flex justify-center items-center">
              <Link to={`/image/${prof.id}`} className="flex gap-5" >
          <Image size={20}/> 
         <strong> صور خدمات الحرفي</strong>
            </Link>
              </p>
             
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default GetById_Pro;

import { useParams } from "react-router-dom";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";

const GetById_Pro = () => {
  const { id } = useParams();
  const prof = GetByIdInfo(
    "https://back.kadrapp.com/admin/v1/professional",
    id
  );
  return (
    <div>
      {" "}
      {prof && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold">تفاصيل الحرفي</h2>
            <img
              src={prof.image}
              alt={prof.name}
              className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 mt-4"
            />
            <h3 className="text-lg font-bold mt-2">{prof.name}</h3>
            <p className="text-gray-500">{prof.service_name}</p>
            <p className="text-gray-500">{prof.description}</p>
            <p className="text-gray-500">{prof.phone1}</p>
            <p className="text-gray-500">{prof.phone2}</p>
            <p className="text-sm text-gray-400">تاريخ الانشاء: 2025/2/3</p>
            <p className="text-sm text-gray-400">تاريخ الانتهاء: 2025/2/3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetById_Pro;

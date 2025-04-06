import { Link, useNavigate, useParams } from "react-router-dom";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";
import { FaLeftLong } from "react-icons/fa6";
import { DeleteIcon } from "lucide-react";

const Image = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const prof = GetByIdInfo(`${url}/professional`, id);
  const nav = useNavigate();

  return (
    <div dir="ltr" className=" bg-gradient-to-br  flex items-center justify-center p-4">
      {prof && (
        <div className=" rounded-3xl p-8 w-full max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <button
              className="flex items-center gap-2 text-red-600 hover:text-red-800 transition text-lg font-semibold"
              onClick={() => nav("/professional")}
            >
              <FaLeftLong className="text-xl" />
              رجوع
            </button>
         
            <button className="bg-blue-500 m-5 hover:bg-slate-50 hover:text-black text-white px-4 py-2 rounded-md ml-2">
      <Link to={"/add_image"}> اضافة صور خدمات الحرفي</Link>
        </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {prof.images.map((image, index) => (
              <div
                key={index}
                className="relative bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={image.image_url}
                  alt={`Image ${index + 1}`}
                  className="w-full h-44 object-cover"
                />

                <Link
                 to={`/delete_image/${image.id}`}
                  className="absolute top-2 right-2 p-2 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md transition"
                >
                  <DeleteIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;

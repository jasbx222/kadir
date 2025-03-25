import GetByIdInfo from '../../../componentes/methode/GetByIdInfo'
import { useParams } from "react-router-dom";
const GetByIdCat = () => {
  const { id } = useParams();
  const url = import.meta.env.VITE_URL_API;
  const category = GetByIdInfo(`${url}admin/v1/category`,id)


  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Category Details
      </h1>
      {category &&
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              Name:
            </span>
            <p className="text-lg text-gray-800 sm:w-3/4">{category.name}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              Image:
            </span>
            <img
              src={category.image}
              alt={category.name}
              className="w-50 h-50 object-cover rounded sm:ml-4 border-4 border-gray-300"
            />
          </div>
        </div>
}
    </div>
  );
};

export default GetByIdCat;

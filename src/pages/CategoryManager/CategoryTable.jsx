import { Eye,  PenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import GetInfo from "../../componentes/methode/GetInfo";

const CategoryTable = () => {
  const url = import.meta.env.VITE_URL_API;
  const categories=GetInfo(`${url}/category`)
  return (
    <div className="overflow-x-auto md:relative md:left-24 ml-4">
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">اسم القسم</th>
            <th className="border border-gray-300 p-2">الصورة</th>
            <th className="border border-gray-300 p-2">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="text-center border border-gray-300">
              <td className="border border-gray-300 p-2 break-words max-w-xs">
                {cat.name}
              </td>
              <td className="border border-gray-300 p-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-16 h-16 mx-auto object-cover rounded-lg"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button className="bg-red-500 text-white px-2 py-1 m-2 rounded">
                  <Link to={`/delete/category/${cat.id}`}>
                    <Trash2 />
                  </Link>
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 m-2 rounded">
                <Link to={`/update/category/${cat.id}`}>
                    <PenLine />
                  </Link>
      </button>
                
                <Link to={`/view/cat/${cat.id}`}>
                  <button className="bg-green-300 text-white px-2 m-2 py-1 rounded">
                    <Eye />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;

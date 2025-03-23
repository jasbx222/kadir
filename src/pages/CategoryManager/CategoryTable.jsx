import React, { useEffect, useState } from "react";
import { Eye, PenLine, Trash2 } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./method/Delete";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await axios.get(
        "https://back.kadrapp.com/admin/v1/category",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (Array.isArray(res.data.data)) {
        setCategories(res.data.data);
      } else {
        console.error("Data is not an array");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = (deletedId) => {
    setCategories(categories.filter((cat) => cat.id !== deletedId));
  };

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
                <DeleteButton id={cat.id} onDeleteSuccess={handleDelete} />
                <Link to={`/edit/${cat.id}`}>
                  <button className="bg-blue-400 text-white px-2 m-2 py-1 rounded">
                    <PenLine />
                  </button>
                </Link>
                <Link to={`/view/${cat.id}`}>
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

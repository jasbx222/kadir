import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function AddCategoryManager() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState("");
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const addCategory = () => {
    if (categoryName && categoryImage && categoryDetails) {
      setCategories([
        ...categories,
        {
          name: categoryName,
          image: URL.createObjectURL(categoryImage),
          details: categoryDetails,
        },
      ]);
      setCategoryName("");
      setCategoryImage(null);
      setCategoryDetails("");
      setShowForm(false);
    }
  };

  const removeCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto w-full">
      <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة قسم"}
      </button>
      {showForm && (
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="اسم القسم"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="file"
            onChange={(e) => setCategoryImage(e.target.files[0])}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="تفاصيل القسم"
            value={categoryDetails}
            onChange={(e) => setCategoryDetails(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={addCategory}
            className="bg-purple-400 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            إضافة قسم
          </button>
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          placeholder="بحث عن قسم..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">اسم القسم</th>
              <th className="border border-gray-300 p-2">الصورة</th>
              <th className="border border-gray-300 p-2">التفاصيل</th>
              <th className="border border-gray-300 p-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr key={index} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2 break-words max-w-xs">
                  {category.name}
                </td>
                <td className="border border-gray-300 p-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 mx-auto object-cover rounded-lg"
                  />
                </td>
                <td className="border border-gray-300 p-2 break-words max-w-xs">
                  {category.details}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => removeCategory(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

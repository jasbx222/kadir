import { useState } from "react";
import { PlusCircle } from "lucide-react";
import CategoryTable from "./CategoryTable";

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
    swal({
      title: "تم اضافة المعلومات بنجاح",
      text: "هل تريد مغادرة الصفحة؟",
      icon: "success",
      dangerMode: false,
    });
  };

  const removeCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-5 w-full">
      <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          backgroundColor: "#2A3890",
        }}
        className="mb-4 ml-5 flex items-center gap-2 text-white px-4 py-2 rounded-lg transition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة "}
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
            style={{
              backgroundColor: "#2A3890",
            }}
            onClick={addCategory}
            className=" text-white btn-cat px-4 py-2 rounded w-full sm:w-auto "
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
      <CategoryTable filteredCategories={filteredCategories} />
    </div>
  );
}

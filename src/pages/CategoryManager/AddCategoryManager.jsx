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
      text: "هل تريد مغاردة الصفحة ؟",
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
    <div className=" max-w-4xl mr-5 mt-5  mx-auto w-full">
      <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 flex ml-5 items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition"
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
     <CategoryTable filteredCategories={filteredCategories}/>
    </div>
  );
}

import { useState } from "react";
import { BadgeCheck, BadgeX, PlusCircle } from "lucide-react";
import CategoryTable from "./CategoryTable";
import GetInfo from "../../componentes/methode/GetInfo";
import { useNavigate } from "react-router-dom";

export default function AddCategoryManager() {
  const [categoryName, setCategoryName] = useState("");
  const [parent_id, setParentId] = useState("");
  const [isPending, setIspending] = useState(false);
  const [categoryImage, setCategoryImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const url = import.meta.env.VITE_URL_API;
  const parentCategories = GetInfo(`${url}/category`);
const navigate= useNavigate();
  const handleSubmit = async (e) => {
    setIspending(true);
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", categoryImage);
    formData.append("parent_id", parent_id);

    try {
      const response = await fetch(`${url}/category`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        swal({
          title: "تم إرسال بياناتك بنجاح",
          icon: "success",
          dangerMode: false,
        });

        setTimeout(() => {
          navigate('/AddCategoryManager')
        }, 1000);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding category:", error.message);
    }
    setIspending(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 md:relative md:left-24 w-full">
      <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{ backgroundColor: "#2A3890" }}
        className="mb-4 ml-5 flex items-center gap-2 text-white px-4 py-2 rounded-lg transition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع" : "إضافة"}
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
       <select
  value={parent_id}
  onChange={(e) => setParentId(e.target.value)}
  className="border p-2 rounded w-full"
>
  <option value="">اختر قسم </option>
  {parentCategories.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name} {item.children.length ===0 ? "(فرعي)" : "(رئيسي)"}
    </option>
  ))}
</select>

          <button
            style={{ backgroundColor: "#2A3890" }}
            onClick={handleSubmit}
            className="text-white btn-cat px-4 py-2 rounded w-full sm:w-auto"
          >
            {isPending ? (
              <span className="loader">جاري التحميل...</span>
            ) : (
              <span>إضافة</span>
            )}
          </button>
        </div>
      )}

      <CategoryTable />
    </div>
  );
}

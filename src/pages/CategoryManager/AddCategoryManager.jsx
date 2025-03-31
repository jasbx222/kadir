import { useState } from "react";
import { PlusCircle } from "lucide-react";
import CategoryTable from "./CategoryTable";
export default function AddCategoryManager() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_URL_API;
    
    const token =window.sessionStorage.getItem('token')
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", categoryImage);

    try {
      const response = await fetch(`${url}admin/v1/category`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
if(response.ok){
  swal({
    title:"تم ارسال بياناتك بنجاح",
    icon: "success",
    dangerMode: false,
  });
setInterval(() => {
   window.location.href='/AddCategoryManager'
}, 1000);
}else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

  
    } catch (error) {
      console.error("Error adding category:", error.message);
    }

  };

  return (
    <div className="max-w-4xl mx-auto p-5 md:relative md:left-24 w-full">
      <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{ backgroundColor: "#2A3890" }}
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
          <button
            style={{ backgroundColor: "#2A3890" }}
            onClick={handleSubmit}
            className="text-white btn-cat px-4 py-2 rounded w-full sm:w-auto"
          >
            إضافة قسم
          </button>
        </div>
      )}

      <CategoryTable />
    </div>
  );
}

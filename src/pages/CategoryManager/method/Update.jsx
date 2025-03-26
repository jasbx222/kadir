import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();
  const HandleShowBtn = () => {
    if (showForm) {
      setShowForm(false);
    } else if (!showForm) {
      navigate("/AddCategoryManager");
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const updateCat = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      swal({
        title: "لا تملك صلاحية التحديث",
        icon: "error",
        dangerMode: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", updatedName);

    // إضافة الصورة في حالة وجودها
    if (updatedImage) {
      formData.append("image", updatedImage);
      console.log("تم إضافة الصورة:", updatedImage);
    } else {
      console.log("لم يتم اختيار صورة جديدة");
    }

    // تسجيل القيم المرسلة
    for (let [key, value] of formData.entries()) {
      console.log(`formData key: ${key}`, value);
    }

    try {
      const response = await axios.post(
        `${url}admin/v1/category/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server Response:", response.data);

      swal({ title: "تم التحديث بنجاح", icon: "success" });
      setShowForm(false);
    } catch (error) {
      console.error("Error updating item:", error);
      swal({
        title: error.response?.data?.message || "فشل في تحديث القسم",
        icon: "error",
        dangerMode: true,
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={() => setShowForm(false)}
          >
            ✖
          </button>
          <h2 className="text-xl mb-4">تعديل القسم</h2>
          <form onSubmit={updateCat}>
            <label className="block mb-2">اسم القسم:</label>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mb-4"
              required
            />

            <label className="block mb-2">تحديث الصورة:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="معاينة الصورة"
                className="w-20 h-20 object-cover rounded mb-4 mx-auto"
              />
            )}

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                حفظ
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={HandleShowBtn}
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;

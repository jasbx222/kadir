import { useState } from "react";
import { PenLine } from "lucide-react";
import swal from "sweetalert";

const UpdateButton = ({ id, name, image, onUpSuccess }) => {
  const [showForm, setShowForm] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedImage, setUpdatedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(image); // لمعاينة الصورة

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // الحصول على الملف
    if (file) {
      setUpdatedImage(file);
      setPreviewImage(URL.createObjectURL(file)); // عرض معاينة للصورة
    }
  };

  // تحديث القسم
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
    if (updatedImage) {
      formData.append("image", updatedImage);
    }

    try {
      const response = await fetch(
        `https://back.kadrapp.com/admin/v1/category/update/${id}`,
        {
          method: "PUT", // استخدام PUT بدلاً من POST
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("فشل في تحديث القسم");
      }
      await response.json();

      swal({ title: "تم التحديث بنجاح", icon: "success", dangerMode: false });

      if (onUpSuccess) {
        onUpSuccess(id, updatedName, previewImage); // تحديث الواجهة
      }
      setShowForm(false); // إغلاق النافذة
    } catch (error) {
      console.error("Error updating item:", error);
      swal({
        title: "فشل التحديث، يرجى المحاولة مرة أخرى",
        icon: "error",
        dangerMode: true,
      });
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-2 py-1 m-2 rounded"
        onClick={() => setShowForm(true)}
      >
        <PenLine />
      </button>

      {showForm && (
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

              {/* عرض الصورة الحالية أو الصورة الجديدة المختارة */}
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
                  onClick={() => setShowForm(false)}
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateButton;

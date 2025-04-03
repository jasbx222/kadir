import axios from "axios";
import '../Artisans.css'
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function AddImage() {
  const [image, setImage] = useState(null);
  const url = import.meta.env.VITE_URL_API;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image[1]", image);

    try {
      const response = await axios.post(
        `${url}admin/v1/professional/add-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        swal({
          title: "تم إرسال بياناتك بنجاح",
          icon: "success",
          dangerMode: false,
        }).then(() => {
          navigate("/professional");
        });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error adding artisan:", error.message);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">اضافة صور للخدمات </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="image">صورة </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          إضافة
        </button>
      </form>
    </div>
  );
}

import axios from "axios";
import '../Artisans.css'
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import GetInfo from "../../../componentes/methode/GetInfo";

export default function AddImage() {
  const [image, setImage] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [isPending,setIspending]=useState(false)
  const url = import.meta.env.VITE_URL_API;
  const navigate = useNavigate();
        const professionals =GetInfo(`${url}/professional`);

  const handleSubmit = async (e) => {
    setIspending(true)
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    if (!selectedProfessional) {
      swal("يرجى اختيار الحرفي قبل رفع الصورة", { icon: "warning" });
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image[0]", image);

    try {
      const response = await axios.post(
        `${url}/professional/add-image/${selectedProfessional}`,
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
          navigate("/add_image");
        });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error adding artisan:", error.message);
      }
    }
    setIspending(false)
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">إضافة صور للخدمات</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="professional">اختر الحرفي</label>
        <select
          id="professional"
          value={selectedProfessional}
          onChange={(e) => setSelectedProfessional(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">اختر الحرفي</option>
          {professionals.map((pro) => (
            <option key={pro.id} value={pro.id}>{pro.name}</option>
          ))}
        </select>

        <label htmlFor="image">صورة</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
      {
        isPending ?"جاري الارسال":"اضافة صور"
      }
        </button>
      </form>
    </div>
  );
}

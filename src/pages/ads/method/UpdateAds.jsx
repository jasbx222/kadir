import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Upload, FileText, ImagePlus, PlusCircle } from "lucide-react";
import { useParams } from "react-router-dom";
const UpdateAds = () => {
  const {id}=useParams()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
 

    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_URL_API;

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post(`${url}admin/v1/ads/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      swal({
        title: "تم ارسال بياناتك بنجاح",
        icon: "success",
        dangerMode: false,
      });
    } catch (error) {
      console.error(
        "Error adding ads:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-4xl ml-5 mr-5 mt-5  mx-auto w-full  bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-bold mt-5 mb-4 text-center">إدارة الإعلان</h1>
  
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FileText className="w-5 h-5 text-gray-500" /> عنوان الإعلان
            </label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="أدخل عنوان الإعلان"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            
            />
          </div>
        

          <div className="flex flex-col">
          <label className="block mb-2">تحديث الصورة:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />      
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#2A3890" }}
            className="w-full flex items-center justify-center gap-2  text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            تحديث الاعلان
          </button>
        </form>

    
    </div>
  );
};

export default UpdateAds;

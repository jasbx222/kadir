import axios from "axios";
import "./Artisans.css";
import { useState } from "react";
export default function ArtisanForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover_image, setCover_image] = useState("");
  const [service_name, setService_name] = useState("");
  const [image, setImage] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [city_id, setCity_id] = useState(5);
  const [category_id, setCategory_id] = useState(11);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://back.kadrapp.com";
  
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("cover_image", cover_image); // Ensure it's a File object
    formData.append("service_name", service_name);
    formData.append("image", image); // Ensure it's a File object
    formData.append("phone1", phone1);
    formData.append("phone2", phone2);
    formData.append("category_id", category_id);
    formData.append("city_id", city_id);
  
    try {
      const response = await axios.post(`${url}/admin/v1/professional`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Correct content type for FormData
        },
      });
  
      if (response.status >= 200 && response.status < 300) {
        swal({
          title: "تم ارسال بياناتك بنجاح",
          icon: "success",
          dangerMode: false,
        });
  
    
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error adding category:", error.message);
      }
    }
  };
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">إضافة حساب حرفي</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="name">الاسم</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full addform p-2 border rounded"
          required
        />

        <label
          htmlFor="service_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          اختار القسم
        </label>
        <input
          type="text"
          name="name"
          value={service_name}
          onChange={(e) => setService_name(e.target.value)}
          className="w-full addform p-2 border rounded"
          required
        />
        
        

        <label htmlFor="image">صورة الحرفي</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="cover_image">صورة الخدمة</label>
        <input
          type="file"
          onChange={(e) => setCover_image(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="description">الوصف</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full textarea-art p-2 border rounded"
        />

        <label htmlFor="phone1">رقم الهاتف 1</label>
        <input
          type="text"
          value={phone1}
          onChange={(e) => setPhone1(e.target.value)}
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="phone2">رقم الهاتف 2</label>
        <input
          type="text"
          value={phone2}
          onChange={(e) => setPhone2(e.target.value)}
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

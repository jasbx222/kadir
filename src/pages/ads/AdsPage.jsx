import { useState } from "react";
import swal from "sweetalert";

import axios from "axios";
import FormAddAds from "./FormAddAds";
import { useNavigate } from "react-router-dom";

export default function AdsPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [isPending,setIspending]=useState(false)
  const [adable_id, setAdable] = useState(null);
  const [adable_type,setAdableType] = useState("App\\Models\\Professional");
  const date = new Date().toISOString().split("T")[0];
  const [expire_date, setExpire_date] = useState(date);

  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];

    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type! Please upload a JPEG, PNG, JPG, or GIF image.");
      return;
    }

    setImage(file);
  };

  const handleSubmit = async (e) => {
    setIspending(true)
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
    formData.append("adable_id", adable_id);
    formData.append("adable_type", adable_type);
    formData.append("type", type);
    formData.append("expire_date", expire_date);

    try {
      await axios.post(`${url}/ads`, formData, {
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
      navigate("/");
    } catch (error) {
      swal({
        title: "حدث خطأ بالسيرفر !",
        icon: "warning",
        dangerMode: true,
      });
    }
    
      setIspending(false)
    
  };

  return (
    <FormAddAds
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      title={title}
      setTitle={setTitle}
      type={type}
      setType={setType}
      image={image}
      showForm={showForm}
      setShowForm={setShowForm}
      adable_id={adable_id}
      setAdable={setAdable}
      setExpire_date={setExpire_date}
      expire_date={expire_date}
      
      isPending={isPending}
    />
  );
}

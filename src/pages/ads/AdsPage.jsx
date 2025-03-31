import { useState } from "react";
import swal from "sweetalert";

import axios from "axios";
import FormAddAds from "./FormAddAds";
import { useNavigate } from "react-router-dom";

export default function AdsPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("عام");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()
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
    formData.append("type", type);

    try {
      await axios.post(`${url}admin/v1/ads`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      swal({

        title: "تم ارسال بياناتك بنجاح",
        icon: "success",
        dangerMode: false,
      });
  navigate('/')
    } catch (error) {
     swal({
      title:'حدث خطأ بالسيرفر !',
      icon:'warning',
      dangerMode:true
     }
     )
    }
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
/>
  );
}

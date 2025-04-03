import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import FormUpdate from "./FormUpdate";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateAds() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const date = new Date().toISOString().split("T")[0];
  const [expire_date, setExpire_date] = useState(date);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_URL_API;
    const token = localStorage.getItem("token");
    if (!token) {
      swal({ title: "Unauthorized: No token found", icon: "error", dangerMode: true });
      return;
    }

    const formData = new FormData();
    if (title) formData.append("title", title);
    if (type) formData.append("type", type);
    if (expire_date) formData.append("expire_date", expire_date);
    if (image) formData.append("image", image);

    try {
      await axios.post(`${url}admin/v1/ads/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      swal({ title: "تم ارسال بياناتك بنجاح", icon: "success" });
      navigate("/");
    } catch (error) {
      console.error("Server Error:", error);
      swal({
        title: error.response?.data?.message || "حدث خطأ بالسيرفر !",
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  return (
    <FormUpdate
      handleSubmit={handleSubmit}
      setImage={setImage}
   
      title={title}
      setTitle={setTitle}
      type={type}
      setType={setType}
      image={image}
      setExpire_date={setExpire_date}
      expire_date={expire_date}
    />
  );
}

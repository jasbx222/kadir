import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdate from "./FormUpdate";

const UpdateAds = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [updatedName, setUpdatedName] = useState("");
  const [type, setType] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const HandleShowBtn = () => {
    setShowForm(false);
    navigate("/ads");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const updateAd = async (e) => {
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
    formData.append("title", updatedName);
    formData.append("type", type);
    if (updatedImage) {
      formData.append("image", updatedImage);
    } else {
      formData.append("image", ""); // Avoid sending null
    }

    try {
      const response = await axios.post(
        `${url}admin/v1/ads/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status===200 || response.status===201) {
        swal({ title: "تم التحديث بنجاح", icon: "success" });
        setShowForm(false);
        navigate("/ads");
      }
    } catch (error) {
      console.error("Error updating ad:", error);
      swal({
        title: error.response?.data?.message || "فشل في تحديث الإعلان",
        icon: "error",
        dangerMode: true,
      });
    }
  };

  return (
    <FormUpdate
      HandleShowBtn={HandleShowBtn}
      handleImageChange={handleImageChange}
      updateAd={updateAd}
      showForm={showForm}
      setShowForm={setShowForm}
      updatedName={updatedName}
      setUpdatedName={setUpdatedName}
      updatedImage={updatedImage}
      setUpdatedImage={setUpdatedImage}
      previewImage={previewImage}
      setType={setType}
      type={type}
    />
  );
};

export default UpdateAds;

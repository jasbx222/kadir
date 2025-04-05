import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdatePro from "./FormUpdatePro";

export default function FormUpdate() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [ispending, setIspending] = useState(false);
  const [image, setImage] = useState(null);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [gevernorate, setGevernorate] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [expireDate, setExpireDate] = useState("");
  
  const url = import.meta.env.VITE_URL_API;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIspending(true);
    e.preventDefault();
    
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    
    // إضافة الحقول فقط إذا كانت تحتوي على قيمة
    if (name) formData.append("name", name);
    if (description) formData.append("description", description);
    if (coverImage) formData.append("cover_image", coverImage);
    if (gevernorate) formData.append("governorate", gevernorate);
    if (serviceName) formData.append("service_name", serviceName);
    if (image) formData.append("image", image);
    if (phone1) formData.append("phone1", phone1);
    if (phone2) formData.append("phone2", phone2);
    if (category?.id) formData.append("category_id", category.id);
    if (city?.id) formData.append("city_id", city.id);
    if (price) formData.append("price", price);
    if (expireDate) formData.append("expire_date", expireDate);
    
    try {
      const response = await axios.post(`${url}/professional/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

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
      console.error("Error updating professional:", error.response?.data || error.message);
    }
    setIspending(false);
  };

  return (
    <FormUpdatePro
      name={name}
      setName={setName}
      ispending={ispending}
      description={description}
      setDescription={setDescription}
      coverImage={coverImage}
      setCoverImage={setCoverImage}
      serviceName={serviceName}
      setServiceName={setServiceName}
      image={image}
      setImage={setImage}
      setGevernorate={setGevernorate}
      gevernorate={gevernorate}
      phone1={phone1}
      setPhone1={setPhone1}
      phone2={phone2}
      setPhone2={setPhone2}
      city={city}
      setCity={setCity}
      category={category}
      setCategory={setCategory}
      price={price}
      setPrice={setPrice}
      expireDate={expireDate}
      setExpireDate={setExpireDate}
      handleSubmit={handleSubmit}
    />
  );
}

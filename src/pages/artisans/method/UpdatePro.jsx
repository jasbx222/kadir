import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import FormUpdate from "./FormUpdatePro";
import { useParams } from "react-router-dom";
export default function UpdatePro() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [service_name, setServiceName] = useState("");
  const [image, setImage] = useState(null);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [city_id, setCity] = useState("");
  const [category_id, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [expire_date, setExpireDate] = useState("");

  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();

 
  const handleSubmit = async (e) => {
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
  
    // Convert values to correct types
    const formData = {
      name: name.trim(), // Trim whitespace
      description: description?.trim() || null,
      cover_image: coverImage || null,
      service_name: String(service_name).trim(), // Ensure it's a string
      image: image || null,
      phone1: String(phone1).trim(), // Ensure it's a string
      phone2: phone2 ? String(phone2).trim() : null,
      category_id: Number(category_id) || null, // Ensure it's a number
      city_id: Number(city_id) || null, // Ensure it's a number
      price: price ? parseFloat(price) : null, // Ensure it's a number
      expire_date: expire_date ? new Date(expire_date).toISOString().split("T")[0] : null, // Ensure valid date format
    };
  
    try {
      const response = await axios.post(`${url}admin/v1/professional/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("User updated successfully", response.data);
      swal({ title: "تم التحديث بنجاح", icon: "success" });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      swal({
        title: "خطأ أثناء التحديث",
        text: JSON.stringify(error.response?.data.errors, null, 2),
        icon: "error",
      });
    }
  };
  
  
     
 
  
  return (
    <FormUpdate
      name={name}
      setName={setName}
      description={description}
      setDescription={setDescription}
      coverImage={coverImage}
      setCoverImage={setCoverImage}
      serviceName={service_name}
      setServiceName={setServiceName}
      image={image}
      setImage={setImage}
      phone1={phone1}
      setPhone1={setPhone1}
      phone2={phone2}
      setPhone2={setPhone2}
      city_id={city_id}
      setCity={setCity}
      category_id={category_id}
      setCategory={setCategory}
      price={price}
      setPrice={setPrice}
      expire_date={expire_date}
      setExpireDate={setExpireDate}
      handleSubmit={handleSubmit}
    />

  )
}
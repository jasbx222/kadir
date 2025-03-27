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
  
    const formData = {
      name: name,
      description: description,
      cover_image: coverImage || null,
      service_name: service_name,
      image: image || null,
      phone1: phone1,
      phone2: phone2 || null,
      category_id: category_id,
      city_id: city_id,
      price: price,
      expire_date: expire_date,
    };
    
    try {
      const response = await axios.post(`${url}admin/v1/professional/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${token}`
        },
      });
      console.log('User updated successfully', response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  }
  
     
 
  
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
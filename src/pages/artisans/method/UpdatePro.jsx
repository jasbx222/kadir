import axios from "axios";
// import "./Artisans.css";
import { useState } from "react";
import swal from "sweetalert";
// import Form from "./Form";
import { useNavigate, useParams } from "react-router-dom";
import FormUpdatePro from "./FormUpdatePro";
export default function FormUpdate() {
  const {id}=useParams()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [image, setImage] = useState(null);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const url = import.meta.env.VITE_URL_API
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (coverImage) formData.append("cover_image", coverImage);
    formData.append("service_name", serviceName);
    if (image) formData.append("image", image);
    formData.append("phone1", phone1);
    if (phone2) formData.append("phone2", phone2);
    formData.append("category_id", category.id);
    formData.append("city_id", city.id);
    formData.append("price", price);
    formData.append("expire_date", expireDate);
    
    try {
      const response = await axios.post(`${url}admin/v1/professional/update/${id}`, formData, {
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
        }).then(()=>{
navigate('/professional')
        });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error adding artisan:", error.message);
      }
    }
  };

  return (
  <FormUpdatePro
  name={name}
  setName={setName}
  description={description}
  setDescription={setDescription}
  coverImage={coverImage}
  setCoverImage={setCoverImage}
  serviceName={serviceName}
  setServiceName={setServiceName}
  image={image}
  setImage={setImage}
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

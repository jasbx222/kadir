import { Link } from "react-router-dom";
import GetInfo from "../../../componentes/methode/GetInfo";

const FormUpdatePro = ({
  name,
  setName,
  description,
  setDescription,
  setCoverImage,
  serviceName,
  setServiceName,
  setImage,
  phone1,
  setPhone1,
  phone2,
  setPhone2,
  city,
  setCity,
  category,
  setCategory,
  price,
  setPrice,
  expireDate,
  setExpireDate,
  handleSubmit,
  ispending,
  setGovernorate,
  gevernorate
  
}) => {
  const url = import.meta.env.VITE_URL_API;
  const cityApi = GetInfo(`${url}/city`);
  const Gapi = GetInfo(`${url}/governorate`);
  const categoryApi = GetInfo(`${url}/category`);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">تحديث حساب حرفي</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="name">تعديل الاسم</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full addform p-2 border rounded"
          
        />

        <label htmlFor="serviceName">تعديل اسم الخدمة </label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="w-full addform p-2 border rounded"
          
        />

        <label htmlFor="image"> تعديل صورة الحرفي</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="coverImage">تعديل صورة الخدمة </label>
        <input
          type="file"
          onChange={(e) => setCoverImage(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="description">تعديل الوصف</label>
        <textarea
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

        <label htmlFor="phone2">رقم الهاتف 2 (اختياري)</label>
        <input
          type="text"
          value={phone2}
          onChange={(e) => setPhone2(e.target.value)}
          className="w-full addform p-2 border rounded"
        />
    <label htmlFor="city">تعديل  محافظة</label>
        <select
          id="gevernorate"
          value={gevernorate.id}
          onChange={(e) => {
            const selectedCity = Gapi.find(
              (c) => c.id === parseInt(e.target.value)
            );
            setGevernorate(selectedCity || { id: "", name: "" });
          }}
          className="w-full addform p-2 border rounded"
        >
          <option value="gevernorate">اختر محافظة</option>
          {Gapi.map((gevernorate) => (
            <option key={gevernorate.id} value={gevernorate.id}>
              {gevernorate.name}
            </option>
          ))}
        </select>
        <label htmlFor="city"> تعديل القضاء</label>
        <select
          id="city"
          value={city.id} 
          onChange={(e) => {
            const selectedCity = cityApi.find(
              (c) => c.id === parseInt(e.target.value)
            );
            setCity(selectedCity || { id: "", name: "" });
          }}
          className="w-full addform p-2 border rounded"
        >
          <option value="">اختر قضاء</option>
          {cityApi.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        <label htmlFor="category"> تعديل القسم</label>
        <select
          id="category"
          value={category.id} 
          onChange={(e) => {
            const selectedCategory = categoryApi.find(
              (cat) => cat.id === parseInt(e.target.value)
            );
            setCategory(selectedCategory || { id: "", name: "" });
          }}
          className="w-full addform p-2 border rounded"
        >
          <option value="">اختر قسم</option>
          {categoryApi.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label htmlFor="price">تعديل السعر</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="expireDate">تعديل تاريخ الانتهاء </label>
        <input
          type="date"
          value={expireDate}
          onChange={(e) => setExpireDate(e.target.value)}
          className="w-full addform p-2 border rounded"
        />
   
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
        {
          ispending ? "جاري التحميل..." : "تحديث"
        }
        </button>
      </form>
    </div>
  );
};

export default FormUpdatePro;

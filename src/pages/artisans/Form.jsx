import { Link } from "react-router-dom";
import GetInfo from "../../componentes/methode/GetInfo";

const Form = ({
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
  address,
  setAddress,
  address_details,
  setAddressDetails,
  isPending,
}) => {
  const url = import.meta.env.VITE_URL_API;
  const cityApi = GetInfo(`${url}admin/v1/city`);
  const categoryApi = GetInfo(`${url}admin/v1/category`);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">إضافة حساب حرفي</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="name">الاسم</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full addform p-2 border rounded"
          required
        />

        <label htmlFor="serviceName">اسم الخدمة</label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
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

        <label htmlFor="coverImage">صورة الغلاف</label>
        <input
          type="file"
          onChange={(e) => setCoverImage(e.target.files[0])}
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="description">الوصف</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full textarea-art p-2 border rounded"
        />
        <label htmlFor="adress">العنوان</label>
        <input

          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full addform p-2 border rounded"
      

          />
        <label htmlFor="address_details">تفاصيل العنوان</label>
        <input

          type="text"
          value={address_details}
          onChange={(e) => setAddressDetails(e.target.value)}
          className="w-full addform p-2 border rounded"
          />
      

        <label htmlFor="phone1">رقم الهاتف 1</label>
        <input
          type="text"
          value={phone1}
          onChange={(e) => setPhone1(e.target.value)}
          className="w-full addform p-2 border rounded"
          required
        />

        <label htmlFor="phone2">رقم الهاتف 2 (اختياري)</label>
        <input
          type="text"
          value={phone2}
          onChange={(e) => setPhone2(e.target.value)}
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="city">اختر محافظة</label>
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
          <option value="">اختر محافظة</option>
          {cityApi.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        <label htmlFor="category">اختر قسم</label>
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

        <label htmlFor="price">السعر</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full addform p-2 border rounded"
        />

        <label htmlFor="expireDate">تاريخ الانتهاء</label>
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
          {isPending ? <span>جاري التحميل...</span> : <span>إضافة</span>}
        </button>
      </form>
    </div>
  );
};

export default Form;

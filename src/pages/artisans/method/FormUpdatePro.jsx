import { Link } from "react-router-dom";
import GetInfo from "../../../componentes/methode/GetInfo";
import '../Artisans.css'
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
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
  <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">تحديث حساب حرفي</h2>
  <form className="grid gap-5" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل الاسم</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل اسم الخدمة</label>
      <input
        type="text"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        className="input-field"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل صورة الحرفي</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        accept="image/*"
        className="input-file"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل صورة الخدمة</label>
      <input
        type="file"
        onChange={(e) => setCoverImage(e.target.files[0])}
        accept="image/*"
        className="input-file"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل الوصف</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="textarea-field"
        rows={4}
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف 1</label>
      <input
        type="text"
        value={phone1}
        onChange={(e) => setPhone1(e.target.value)}
        className="input-field"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف 2 (اختياري)</label>
      <input
        type="text"
        value={phone2}
        onChange={(e) => setPhone2(e.target.value)}
        className="input-field"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل المحافظة</label>
      <select
        value={gevernorate.id}
        onChange={(e) => {
          const selected = Gapi.find(c => c.id === parseInt(e.target.value));
          setGovernorate(selected || { id: "", name: "" });
        }}
        className="input-field"
      >
        <option value="">اختر محافظة</option>
        {Gapi.map((gov) => (
          <option key={gov.id} value={gov.id}>{gov.name}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل القضاء</label>
      <select
        value={city.id}
        onChange={(e) => {
          const selected = cityApi.find(c => c.id === parseInt(e.target.value));
          setCity(selected || { id: "", name: "" });
        }}
        className="input-field"
      >
        <option value="">اختر قضاء</option>
        {cityApi.map((city) => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل القسم</label>
      <select
        value={category.id}
        onChange={(e) => {
          const selected = categoryApi.find(cat => cat.id === parseInt(e.target.value));
          setCategory(selected || { id: "", name: "" });
        }}
        className="input-field"
      >
        <option value="">اختر قسم</option>
        {categoryApi.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل السعر</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">تعديل تاريخ الانتهاء</label>
      <input
        type="date"
        value={expireDate}
        onChange={(e) => setExpireDate(e.target.value)}
        className="input-field"
      />
    </div>

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 w-full"
    >
      {ispending ? "جاري التحميل..." : "تحديث"}
    </button>
  </form>
</div>

  );
};

export default FormUpdatePro;

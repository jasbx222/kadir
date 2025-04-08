import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetInfo from "../../componentes/methode/GetInfo";
import { FileInput, Input, Select,Textarea } from "./InputForm";

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
  gevernorate,
  setGevernorate,
}) => {
  const url = import.meta.env.VITE_URL_API;
  const cityApi = GetInfo(`${url}/city`);
  const Gapi = GetInfo(`${url}/governorate`);
  const categoryApi = GetInfo(`${url}/category`);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      dir="rtl"
      className={`max-w-2xl  mx-auto p-6 mt-24 bg-gradient-to-tr from-white to-blue-50 shadow-xl rounded-2xl transition-all duration-700 ease-out transform ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-extrabold text-center text-blue-700 mb-6">
        إضافة حساب حرفي
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <Input label="الاسم" value={name} onChange={setName} required />
          <Input label="اسم الخدمة" value={serviceName} onChange={setServiceName} required />
          <FileInput label="صورة الحرفي" onChange={setImage} />
          <FileInput label="صورة الغلاف" onChange={setCoverImage} />
          <Textarea label="الوصف" value={description} onChange={setDescription} />
          <Input label="العنوان" value={address} onChange={setAddress} />
          <Input label="تفاصيل العنوان" value={address_details} onChange={setAddressDetails} />
          <Input label="رقم الهاتف 1" value={phone1} onChange={setPhone1} required />
          <Input label="رقم الهاتف 2 (اختياري)" value={phone2} onChange={setPhone2} />

          <Select
            label="اختر محافظة"
            value={gevernorate.id}
            options={Gapi}
            onChange={(val) => {
              const selected = Gapi.find((c) => c.id === parseInt(val));
              setGevernorate(selected || { id: '', name: '' });
            }}
          />

          <Select
            label="اختر قضاء"
            value={city.id}
            options={cityApi}
            onChange={(val) => {
              const selected = cityApi.find((c) => c.id === parseInt(val));
              setCity(selected || { id: '', name: '' });
            }}
          />

          <Select
            label="اختر قسم"
            value={category.id}
            options={categoryApi}
            renderOption={(cat) =>
              cat.children.length > 0 ? cat.name : `${cat.name} - قسم فرعي`
            }
            onChange={(val) => {
              const selected = categoryApi.find((cat) => cat.id === parseInt(val));
              setCategory(selected || { id: '', name: '' });
            }}
          />

          <Input label="السعر" value={price} onChange={setPrice} />
          <Input label="تاريخ الانتهاء" type="date" value={expireDate} onChange={setExpireDate} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-bold py-2 px-4 rounded-lg mt-6 shadow-md"
        >
          {isPending ? "جاري التحميل..." : "إضافة"}
        </button>
      </form>
    </div>
  );
};



export default Form;
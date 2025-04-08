
import GetInfo from "../../../componentes/methode/GetInfo";
import { SelectInput, TextInput,FileInput, TextArea } from "./InputUpdateForm";

const FormUpdatePro = ({
  name, setName,
  description, setDescription,
  setCoverImage,
  serviceName, setServiceName,
  setImage,
  phone1, setPhone1,
  phone2, setPhone2,
  city, setCity,
  category, setCategory,
  price, setPrice,
  expireDate, setExpireDate,
  handleSubmit, ispending,
  setGovernorate, gevernorate
}) => {
  const url = import.meta.env.VITE_URL_API;
  const cityApi = GetInfo(`${url}/city`);
  const Gapi = GetInfo(`${url}/governorate`);
  const categoryApi = GetInfo(`${url}/category`);

  return (
    <div dir="rtl" className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-500">تحديث حساب حرفي</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextInput label="تعديل الاسم" value={name} onChange={(e) => setName(e.target.value)} />
        <TextInput label="تعديل اسم الخدمة" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
        <FileInput label="تعديل صورة الحرفي" onChange={(e) => setImage(e.target.files[0])} />
        <FileInput label="تعديل صورة الخدمة" onChange={(e) => setCoverImage(e.target.files[0])} />
        
    
        <TextArea label="تعديل الوصف" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextInput label="رقم الهاتف 1" value={phone1} onChange={(e) => setPhone1(e.target.value)} />
      
        <TextInput label="رقم الهاتف 2 (اختياري)" value={phone2} onChange={(e) => setPhone2(e.target.value)} />

        <SelectInput
          label="تعديل محافظة"
          value={gevernorate?.id || ""}
          onChange={(e) => {
            const selected = Gapi.find((c) => c.id === parseInt(e.target.value));
            setGovernorate(selected || { id: "", name: "" });
          }}
          options={Gapi}
          defaultLabel="اختر محافظة"
        />

        <SelectInput
          label="تعديل القضاء"
          value={city?.id || ""}
          onChange={(e) => {
            const selected = cityApi.find((c) => c.id === parseInt(e.target.value));
            setCity(selected || { id: "", name: "" });
          }}
          options={cityApi}
          defaultLabel="اختر قضاء"
        />

        <SelectInput
          label="تعديل القسم"
          value={category?.id || ""}
          onChange={(e) => {
            const selected = categoryApi.find((cat) => cat.id === parseInt(e.target.value));
            setCategory(selected || { id: "", name: "" });
          }}
          options={categoryApi}
          defaultLabel="اختر قسم"
        />

        <TextInput label="تعديل السعر" value={price} onChange={(e) => setPrice(e.target.value)} />
        <TextInput label="تعديل تاريخ الانتهاء" type="date" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {ispending ? "جاري التحميل..." : "تحديث"}
        </button>
      </form>
    </div>
  );
};

export default FormUpdatePro;






import { Upload, FileText, ImagePlus, PlusCircle } from "lucide-react";
import AdsTable from "./AdsTable";
import GetInfo from "../../componentes/methode/GetInfo";

const FormAddAds = ({
  handleSubmit,
  handleFileChange,
  title,
  setTitle,
  type,
  setType,
  showForm,
  setShowForm,
  setExpire_date,
  expire_date,
  adable_id,
  setAdable,
  isPending
}) => {
  const url = import.meta.env.VITE_URL_API;

  const data = GetInfo(`${url}/professional`);

  return (
    <div className="max-w-4xl ml-5 mr-5 mt-5 mx-auto w-full bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-bold mt-5 mb-4 text-center">إدارة الإعلان</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{ backgroundColor: "#2A3890" }}
        className="mb-4 ml-5 flex items-center  gap-2 text-white px-4 py-2 rounded-lg transition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة "}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4">
          <div>
            <label
              htmlFor="title"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <FileText className="w-5 h-5 text-gray-500" /> عنوان الإعلان
            </label>
            <input
              id="title"
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="أدخل عنوان الإعلان"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <FileText className="w-5 h-5 text-gray-500" /> نوع الاعلان
            </label>
            <input
              id="type"
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="أدخل نوع الإعلان"
              value={type || ""}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="adable"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <FileText className="w-5 h-5 text-gray-500" /> ربط الاعلان مع الحرفي
            </label>
            <select
              id="adable"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={adable_id || ""}
              onChange={(e) => setAdable(e.target.value)}
              required
            >
              <option value="">   اختيار الحرفي </option>
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="expire_date"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <FileText className="w-5 h-5 text-gray-500" /> تاريخ الانتهاء
            </label>
            <input
              id="expire_date"
              type="date"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={expire_date}
              onChange={(e) => setExpire_date(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <ImagePlus className="w-5 h-5 text-gray-500" /> صورة الإعلان
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="mt-2"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#2A3890" }}
            className="w-full flex items-center justify-center gap-2 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Upload className="w-5 h-5" /> {
              isPending ? (
                <span>جاري التحميل...</span>
              ) : (
                <span>إرسال الإعلان</span>
              )
            } 
          </button>
        </form>
      )}
      <AdsTable />
    </div>
  );
};

export default FormAddAds;

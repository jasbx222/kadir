import { useState } from "react";
import { Upload, Calendar, FileText, Layers, ImagePlus } from "lucide-react";

export default function AdsPage() {
  const [adTitle, setAdTitle] = useState("");
  const [adDetails, setAdDetails] = useState("");
  const [adDate, setAdDate] = useState("");
  const [category, setCategory] = useState("عام");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data ={
      adTitle:adTitle,
      adDetails:adDetails,
      adDate:adDate,
      category:category,
      image:image
    }
    console.log(data);
  };

  return (
    <div className="max-w-lg mt-5 mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
        📢 رفع إعلان جديد
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <FileText className="w-5 h-5 text-gray-500" />
            عنوان الإعلان
          </label>
          <input
            type="text"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="أدخل عنوان الإعلان"
            value={adTitle}
            onChange={(e) => setAdTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Layers className="w-5 h-5 text-gray-500" />
            تفاصيل الإعلان
          </label>
          <textarea
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            rows="3"
            placeholder="أدخل تفاصيل الإعلان"
            value={adDetails}
            onChange={(e) => setAdDetails(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Layers className="w-5 h-5 text-gray-500" />
            اختر القسم
          </label>
          <select
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="عام">عام</option>
            <option value="حرفي">حرفي</option>
            <option value="بنر رئيسي">بنر الصفحة الرئيسية</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <Calendar className="w-5 h-5 text-gray-500" />
            تاريخ الإعلان
          </label>
          <input
            type="date"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={adDate}
            onChange={(e) => setAdDate(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <ImagePlus className="w-5 h-5 text-gray-500" />
            صورة الإعلان
          </label>
          <input
            type="file"
            accept="image/*"
            className="mt-2"
            onChange={handleImageUpload}
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-3 w-full h-40 object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Upload className="w-5 h-5" />
          رفع الإعلان
        </button>
      </form>
    </div>
  );
}

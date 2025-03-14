import { useState } from "react";
import {
  Upload,
  Calendar,
  FileText,
  Layers,
  ImagePlus,
  PlusCircle,
} from "lucide-react";

export default function AdsPage() {
  const [adTitle, setAdTitle] = useState("");
  const [adDetails, setAdDetails] = useState("");
  const [adDate, setAdDate] = useState("");
  const [category, setCategory] = useState("عام");
  const [image, setImage] = useState(null);
  const [ads, setAds] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAd = {
      title: adTitle,
      details: adDetails,
      date: adDate,
      category: category,
      image: image,
    };
    setAds([...ads, newAd]);
    setAdTitle("");
    setAdDetails("");
    setAdDate("");
    setCategory("عام");
    setImage(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-xl w-full mr-10">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة إعلان"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FileText className="w-5 h-5 text-gray-500" /> عنوان الإعلان
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
              <Layers className="w-5 h-5 text-gray-500" /> تفاصيل الإعلان
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
              <Calendar className="w-5 h-5 text-gray-500" /> تاريخ الإعلان
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
              <ImagePlus className="w-5 h-5 text-gray-500" /> صورة الإعلان
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
            className="w-full flex items-center justify-center gap-2 bg-purple-400 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Upload className="w-5 h-5" /> رفع الإعلان
          </button>
        </form>
      )}

      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3">عنوان الإعلان</th>
              <th className="border border-gray-300 p-3">التفاصيل</th>
              <th className="border border-gray-300 p-3">التاريخ</th>
              <th className="border border-gray-300 p-3">الصورة</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 p-3">{ad.title}</td>
                <td className="border border-gray-300 p-3">{ad.details}</td>
                <td className="border border-gray-300 p-3">{ad.date}</td>
                <td className="border border-gray-300 p-3">
                  {ad.image && (
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-20 h-20 mx-auto object-cover rounded-lg"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

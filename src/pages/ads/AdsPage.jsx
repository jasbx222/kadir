import { useState } from "react";
import swal from "sweetalert";
import {
  Upload,
  Calendar,
  FileText,
  Layers,
  ImagePlus,
  PlusCircle,
} from "lucide-react";
import AdsTable from "./AdsTable";

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
    swal({
      title: "تم اضافة المعلومات بنجاح",
      text: "هل تريد مغاردة الصفحة ؟",
      icon: "success",
      dangerMode: false,
    });
  };

  return (
    <div className="max-w-4xl ml-5 mr-5 mt-5  mx-auto w-full  bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-bold mt-5 mb-4 text-center">إدارة  الإعلان</h1>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{backgroundColor:'#2A3890'}}
        className="mb-4 ml-5 flex items-center rounded gap-2  text-white px-4 py-2 rounded-lgtransition"
      >
        <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة "}
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
            style={{backgroundColor:'#2A3890'}}
            className="w-full flex items-center justify-center gap-2  text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Upload className="w-5 h-5" /> رفع الإعلان
          </button>
        </form>
      )}

     <AdsTable ads={ads}/>
    </div>
  );
}

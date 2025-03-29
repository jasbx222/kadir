import { Upload, FileText, ImagePlus, PlusCircle } from "lucide-react";
import AdsTable from "./AdsTable";
const FormAddAds = ({
    handleSubmit,
handleFileChange,
title,
setTitle,
type,
setType,
image,
showForm,
setShowForm
}) => {
  return (
    <div className="max-w-4xl ml-5 mr-5 mt-5  mx-auto w-full  bg-white shadow-lg rounded-xl">
    <h1 className="text-xl font-bold mt-5 mb-4 text-center">إدارة الإعلان</h1>
    <button
      onClick={() => setShowForm(!showForm)}
      style={{ backgroundColor: "#2A3890" }}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <FileText className="w-5 h-5 text-gray-500" /> نوع الاعلان
          </label>
          <input
            type="text"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="أدخل عنوان الإعلان"
            value={type ? type : ""}
            onChange={(e) => setType(e.target.value)}
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
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#2A3890" }}
          className="w-full flex items-center justify-center gap-2  text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Upload className="w-5 h-5" /> رفع الإعلان
        </button>
      </form>
    )}
<AdsTable/>
  
  </div>
  )
}

export default FormAddAds
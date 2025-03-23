import { PlusCircle } from "lucide-react";
import { useState } from "react";
const Form = ({
    handleSubmit,
    categoryName,
    setCategoryImage,
    setCategoryName,
    setCategoryImage
}) => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div>
             <h1 className="text-xl font-bold mb-4 text-center">إدارة الأقسام</h1>

<button
  onClick={() => setShowForm(!showForm)}
  style={{ backgroundColor: "#2A3890" }}
  className="mb-4 ml-5 flex items-center gap-2 text-white px-4 py-2 rounded-lg transition"
>
  <PlusCircle className="w-5 h-5" /> {showForm ? "تراجع " : "إضافة "}
</button>

{showForm && (
  <div className="flex flex-col sm:flex-row gap-2 mb-4">
    <input
      type="text"
      placeholder="اسم القسم"
      value={categoryName}
      onChange={(e) => setCategoryName(e.target.value)}
      className="border p-2 rounded w-full"
    />
    <input
      type="file"
      onChange={(e) => setCategoryImage(e.target.files[0])}
      className="border p-2 rounded w-full"
    />
    <button
      style={{ backgroundColor: "#2A3890" }}
      onClick={handleSubmit}
      className="text-white btn-cat px-4 py-2 rounded w-full sm:w-auto"
    >
      إضافة قسم
    </button>
  </div>
)}

    </div>
  )
}

export default Form
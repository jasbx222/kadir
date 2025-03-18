import './Artisans.css'
export default function ArtisanForm() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">إضافة حساب حرفي</h2>
      <form className="space-y-4">
        <label htmlFor="">الاسم </label>
        <input type="text" name="name" className="w-full addform p-2 border rounded" />
        <label htmlFor="">صورة الحرفي</label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />
        <label htmlFor="">صورة الخدمة</label>
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full addform p-2 border rounded"
        />
        <label htmlFor=""> الوصف </label>
        <textarea
          name="description"
          className="w-full textarea-art p-2 border rounded"
        ></textarea>
        <label htmlFor="">السعر </label>
        <input
          type="number"
          name="price"
          className="w-full addform p-2 border rounded"
        />
        <label htmlFor="">كلمة المرور </label>
        <input type="text" className="w-full p-2 addform border rounded" />
        <label htmlFor="">تاريخ الانشاء</label>
        <input
          type="date"
          name="dateAdd"
          className="w-full addform p-2 border rounded"
        />
        <label htmlFor="">تاريخ الانتهاء</label>
        <input
          type="date"
          name="expiryDate"
          className="w-full  addform p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          إضافة
        </button>
      </form>
    </div>
  );
}


export default function ArtisanForm() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">إضافة حساب حرفي</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="وصف الخدمة"
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="السعر"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
      
          placeholder="كلمة المرور"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="expiryDate"
          className="w-full p-2 border rounded"
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

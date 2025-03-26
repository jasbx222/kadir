import React from "react";

const FormUpdate = ({
  HandleShowBtn,
  handleImageChange,
  updateAd,
  updatedName,
  setUpdatedName,
  setType,
  type
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={HandleShowBtn}
          >
            ✖
          </button>
          <h2 className="text-xl mb-4">تعديل الإعلان</h2>
          <form onSubmit={updateAd}>
            <label className="block mb-2">عنوان الإعلان:</label>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mb-4"
              required
            />
            <label className="block mb-2">نوع الاهلان :</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mb-4"
              required
            />

            <label className="block mb-2">تحديث الصورة:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />

          

            <div className="flex justify-between">
              <button
                type="submit"
                className={`bg-green-500 text-white px-4 py-2 rounded `}
              >
             save
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={HandleShowBtn}
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUpdate;

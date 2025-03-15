import React from 'react'

const CategoryTable = ({filteredCategories,}) => {
  return (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">اسم القسم</th>
              <th className="border border-gray-300 p-2">الصورة</th>
              <th className="border border-gray-300 p-2">التفاصيل</th>
              <th className="border border-gray-300 p-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr key={index} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2 break-words max-w-xs">
                  {category.name}
                </td>
                <td className="border border-gray-300 p-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 mx-auto object-cover rounded-lg"
                  />
                </td>
                <td className="border border-gray-300 p-2 break-words max-w-xs">
                  {category.details}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => removeCategory(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default CategoryTable
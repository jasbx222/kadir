import { Frown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
   <div className="flex justify-center items-center ">
     <div className="flex flex-col  min-h-screen  justify-center items-center  text-center">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-xl text-gray-600 mt-4 mr-4">للاسف ! الصفحة التي تبحث عنها غير موجودة

  
    </p>
    <Frown size={44} className='mt-2'/>
    <Link
      to="/"
      className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
    >
      الصفحة الرئيسية
    </Link>
  </div>
   </div>
  )
}

export default Notfound
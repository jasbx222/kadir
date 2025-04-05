import { Trash2, Eye, PenLine } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";

const Image = () => {
const {id} = useParams()
  const url = import.meta.env.VITE_URL_API;
const images = GetByIdInfo(`${url}admin/v1/professional`,id);
console.log(images);
  return (
    <div   className=" artisan mx-auto md:relative  md:left-40 p-4">
  
   
{
  images && images.length > 0 ? (      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
        <div key={index} className="relative bg-white shadow-md rounded-lg p-4">
            <img
            src={`${url}/professional/${images.image}`}
            alt="Artisan"
            className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{images.name}</h2>
       
            <div className="flex justify-between items-center">
            <Link to={`/update/ads/${images.id}`} className="text-blue-500 hover:underline">
                تعديل
            </Link>
            <Link to={`/delete/ads/${images.id}`} className="text-red-500 hover:underline">
                حذف
            </Link>
            </div>
        </div>

  </div>):(
    <div className="flex justify-center items-center ">
      <h1 className="text-2xl font-bold text-red-500">لا يوجد صور حاليا</h1>
    </div>

  )
}
    </div>
  );
};



export default Image
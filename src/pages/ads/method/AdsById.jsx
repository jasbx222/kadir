import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetByIdInfo from "../../../componentes/methode/GetByIdInfo";
const AdsById = () => {
  const { id } = useParams();
  const url = import.meta.env.VITE_URL_API;
  const ads = GetByIdInfo(`${url}admin/v1/ads`, id);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        ads
      </h1>
      {ads ? (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              عنوان الاعلان:
            </span>
            <p className="text-lg text-gray-800 sm:w-3/4">{ads.title}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              صورة الاعلان:
            </span>
            <img
              src={ads.image}
              alt={ads.title}
              className="w-50 h-50 object-cover rounded sm:ml-4 border-4 border-gray-300"
            />
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-red-500">
          لا توجد اعلان حاليا !{" "}
        </p>
      )}
    </div>
  );
};

export default AdsById;

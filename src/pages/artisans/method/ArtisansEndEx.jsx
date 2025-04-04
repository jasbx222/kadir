import { PenLine, Trash2, Eye } from "lucide-react";
import React, { useState } from "react";
import GetInfo from "../../../componentes/methode/GetInfo";
import { Link } from "react-router-dom";

const ArtisansEndEx = () => {
  const [search, setSearch] = useState("");
  const url = import.meta.env.VITE_URL_API;
  const data = GetInfo(`${url}admin/v1/professional`);

  const filterData = data.filter(
    (artisan) =>
      (artisan.name.includes(search) || artisan.service_name.includes(search)) &&
      new Date(artisan.expire_date) < new Date()
  );

  return (
    <div className="container artisan mx-auto md:relative md:left-40 p-4">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="ابحث عن الحرفي..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border custom-button p-2 rounded-md w-1/3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterData.map((artisan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={artisan.cover_image} alt="background" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10"
              />
              <h3 dir="ltr" className="text-lg font-bold mt-2">{artisan.name}</h3>
              <p className="text-gray-500">{artisan.service_name}</p>
              <p className="text-sm text-gray-400">
            <span className="text-red-500">{artisan.expire_date}</span>
              </p>
                 <div className="text-sm text-gray-400 flex justify-around mt-2">
                            <p className="text-sm text-gray-400 flex justify-around mt-2">
                              <span>
                                <Link to={`/delete/professional/${artisan.id}`}>
                                  <Trash2 color="red" />
                                </Link>
                              </span>
                            </p>
            
                            <button className="bg-blue-500 text-white px-2 py-1 m-2 rounded">
                              <Link to={`/update/pro/${artisan.id}`}>
                                <PenLine />
                              </Link>
                            </button>
                          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisansEndEx;

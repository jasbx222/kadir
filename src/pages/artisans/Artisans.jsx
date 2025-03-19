import {  Pen, Trash2, Eye } from "lucide-react";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";
import { artisans } from "./artisan";


const Artisans = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filteredArtisan = artisans.filter(artisan => 
    artisan.name.includes(search) || artisan.specialty.includes(search)
  );

  return (
    <div className="container artisan mx-auto md:relative md:left-40 p-4">
      <div className="flex justify-center items-center mb-4">
   
        <input 
          type="text" 
          placeholder="ابحث عن الحرفي..." 
          value={search} 
          style={{
            width: "50%",
          }}
          onChange={(e) => setSearch(e.target.value)} 
          className="border p-2 rounded-md w-1/3"
        />
      </div>
      <div style={{width:'30px'}}><Link className=" relative bottom-10"  to={'/add_new_artisan'}><CgAdd size={30} color="#2A3890"/></Link></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredArtisan.map((artisan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={artisan.background} alt="background" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <img src={artisan.image} alt={artisan.name} className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10" />
              <h3 className="text-lg font-bold mt-2">{artisan.name}</h3>
              <p className="text-gray-500">{artisan.specialty}</p>
              <p className="text-sm text-gray-400">تاريخ الانشاء: {artisan.startDate}</p>
              <p className="text-sm text-gray-400">تاريخ الانتهاء: {artisan.endDate}</p>
              <p className="text-sm text-gray-400 flex justify-around mt-2">
                <span><Trash2 color="red" /></span>
                <span><Pen color="green" /></span>
                <span onClick={() => setSelected(artisan)} className="cursor-pointer"><Eye color="blue" /></span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold">تفاصيل الحرفي</h2>
            <img src={selected.image} alt={selected.name} className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 mt-4" />
            <h3 className="text-lg font-bold mt-2">{selected.name}</h3>
            <p className="text-gray-500">{selected.specialty}</p>
            <p className="text-sm text-gray-400">تاريخ  الانشاء: 2025/2/3</p>
            <p className="text-sm text-gray-400">تاريخ الانتهاء: 2025/2/3</p>
            <button onClick={() => setSelected(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artisans;

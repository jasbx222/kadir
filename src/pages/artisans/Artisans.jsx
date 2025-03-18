import {  Pen, Trash2, Eye } from "lucide-react";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const trainers = [
  { name: "طارق كرم بدر", specialty: "سباكة", image: "https://th.bing.com/th/id/OIP.0SGZks-oYyxJ2gu_Vh6H1gHaHa?rs=1&pid=ImgDetMain", background: "https://th.bing.com/th/id/OIP.0SGZks-oYyxJ2gu_Vh6H1gHaHa?rs=1&pid=ImgDetMain" },
  { name: "علي عباس كرم", specialty: "عامل بناء", image: "https://th.bing.com/th/id/OIP.1Ueag3iUk5UdEja0WsL9EgHaHa?rs=1&pid=ImgDetMain", background: "https://th.bing.com/th/id/OIP.1Ueag3iUk5UdEja0WsL9EgHaHa?rs=1&pid=ImgDetMain" },
  { name: "عبدالله سعيد احمد", specialty: "نجارة", image: "https://th.bing.com/th/id/OIP.tFjUj4elJC8y8oehZCiJpQAAAA?rs=1&pid=ImgDetMain", background:"https://th.bing.com/th/id/OIP.tFjUj4elJC8y8oehZCiJpQAAAA?rs=1&pid=ImgDetMain" },
];

const Artisans = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrainers = trainers.filter(trainer => 
    trainer.name.includes(searchTerm) || trainer.specialty.includes(searchTerm)
  );

  return (
    <div className="container mx-auto md:relative md:left-40 p-4">
      <div className="flex justify-center items-center mb-4">
   
        <input 
          type="text" 
          placeholder="ابحث عن الحرفي..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border p-2 rounded-md w-1/3"
        />
      </div>
      <div style={{width:'30px'}}><Link className=" relative bottom-10"  to={'/add_new_artisan'}><CgAdd size={30} color="#2A3890"/></Link></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTrainers.map((trainer, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={trainer.background} alt="background" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10" />
              <h3 className="text-lg font-bold mt-2">{trainer.name}</h3>
              <p className="text-gray-500">{trainer.specialty}</p>
              <p className="text-sm text-gray-400">تاريخ الانشاء: 2025/2/3</p>
              <p className="text-sm text-gray-400 flex justify-around mt-2">
                <span><Trash2 color="red" /></span>
                <span><Pen color="green" /></span>
                <span onClick={() => setSelectedTrainer(trainer)} className="cursor-pointer"><Eye color="blue" /></span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedTrainer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold">تفاصيل المدرب</h2>
            <img src={selectedTrainer.image} alt={selectedTrainer.name} className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 mt-4" />
            <h3 className="text-lg font-bold mt-2">{selectedTrainer.name}</h3>
            <p className="text-gray-500">{selectedTrainer.specialty}</p>
            <p className="text-sm text-gray-400">تاريخ الانشاء: 2025/2/3</p>
            <button onClick={() => setSelectedTrainer(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artisans;

import { Trash2, Eye, PenLine } from "lucide-react";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import GetInfo from "../../componentes/methode/GetInfo";
import { Link } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";
const Artisans = () => {
  const [search, setSearch] = useState("");
  const url = import.meta.env.VITE_URL_API;
  const data = GetInfo(`${url}/professional`);
  const filterData = data.filter(
    (artisan) =>
      artisan.name.includes(search) || artisan.service_name.includes(search)
  );

  return (
    <div   className=" artisan mx-auto md:relative  md:left-40 p-4">
      
      <div style={{ width: "30px" }}>
      
        <button style={{borderRadius:'30%',width:'70px',height:'70px'}} className="bg-blue-500 hover:bg-slate-50 hover:text-black m-5 text-white px-4 py-2 rounded-md ml-2">
        <Link className="  flex items-center  justify-center " to={"/add_professional"}>
          <CgAdd className="text-2xl"  size={40}/>
        </Link>
        </button>
      
      </div>
      <div className="md:flex justify-center items-center block   mb-4" style={{width:'100%'}}>
        <input
          type="text"
          placeholder="ابحث عن الحرفي..."
          value={search}
        
          onChange={(e) => setSearch(e.target.value)}
          className="border space-y-7 custom-button p-2 rounded-md w-1/3"
        />
      
      </div>
      <div className="flex justify-center relative bottom-4 items-center">
       <button className="bg-blue-500 hover:bg-slate-50 hover:text-black m-5 text-white px-4 py-2 rounded-md ml-2">
      <Link to={"/expier_date"}>     الحرفين منتهي الصلاحية</Link>
        </button>
        <button className="bg-blue-500 hover:bg-slate-50 hover:text-black m-5 text-white px-4 py-2 rounded-md ml-2">
      <Link to={"/active_professional"}>     الحرفين النشيطين</Link>
        </button>
    
       </div>
{
  filterData && filterData.length > 0 ? (      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {filterData.map((artisan, index) => (
   <Link to={`/veiw_professional/${artisan.id}`} key={index}>
       <div

key={index}
className="bg-white rounded-2xl shadow-lg overflow-hidden"
>
<img
  src={artisan.cover_image}
  alt="background"
  className="w-full h-40 object-cover"
/>
<div className="p-4 text-center">
  <img
    src={artisan.image}
    alt={artisan.name}
    className="w-16 h-16 rounded-full mx-auto border-2 border-white -mt-10"
  />

  <h3 dir="ltr" className="text-lg font-bold mt-2">{artisan.name}</h3>
  <p className="text-gray-500">{artisan.service_name}</p>

  <p className="text-sm text-gray-400">
    عدد الاتصالات
    <span className="text-red-500">
      {" "}
      {artisan.connection_count}
    </span>
  </p>
  <p className="text-sm text-gray-400 flex justify-around mt-2">
    <span>

    <button className="bg-blue-500 text-white px-2 py-1 m-2 rounded">
    <Link to={`/delete/professional/${artisan.id}`}>
        <Trash2 color="#fff" />
      </Link>
    </button>
    </span>
    <span>
    <button className="bg-blue-500 text-white px-2 py-1 m-2 rounded">
                  <Link to={`/update/pro/${artisan.id}`}>
                      <PenLine />
                    </Link>
        </button>
    </span>

  </p>
</div>
</div>
   </Link>
    ))}
  </div>):(
<div className="flex justify-center items-center">
<Loading/>
  </div>

  )
}
    </div>
  );
};

export default Artisans;

import { Pen, Trash2, Eye } from "lucide-react";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import GetInfo from "../../componentes/methode/GetInfo";
import { Link } from "react-router-dom";
const Artisans = () => {
  const [search, setSearch] = useState("");
  const url = import.meta.env.VITE_URL_API;
  const data = GetInfo(`${url}admin/v1/professional`);
  const filterData = data.filter(
    (artisan) =>
      artisan.name.includes(search) || artisan.service_name.includes(search)
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
      <div style={{ width: "30px" }}>
        <Link className=" relative bottom-10" to={"/add_new_artisan"}>
          <CgAdd size={30} color="#2A3890" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterData.map((artisan, index) => (
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

              <h3 className="text-lg font-bold mt-2">{artisan.name}:الاسم</h3>
              <p className="text-gray-500">{artisan.service_name}:القسم</p>

              <p className="text-sm text-gray-400">
                عدد الاتصالات
                <span className="text-red-500">
                  {" "}
                  {artisan.connection_count}
                </span>
              </p>
              <p className="text-sm text-gray-400 flex justify-around mt-2">
                <span>
                  <Trash2 color="red" />
                </span>
                <span>
                  <Pen color="green" />
                </span>
                <span className="cursor-pointer">
                  <Link to={`/veiw_professional/${artisan.id}`}>
                    <Eye color="blue" />
                  </Link>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artisans;

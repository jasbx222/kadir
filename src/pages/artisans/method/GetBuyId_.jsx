import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const GetBuyId_ = ({setShow}) => {
    const { id } = useParams();
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
  
        if (!token) {
          setError("No token found.");
          setLoading(false);
          return;
        }
  
        const res = await axios.get(
          `https://back.kadrapp.com/admin/v1/professional/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (res.data) {
          setCategory(res.data); // تعيين الكائن الذي يستقبله من الـ API
        } else {
          setError("No data found.");
        }
      } catch (error) {
        console.error("Error fetching category:", error);
        setError("Error fetching category.");
      } finally {
        setLoading(false);
      }
    };
  return (
    <div>    {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-bold">تفاصيل الحرفي</h2>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300 mt-4"
            />
            <h3 className="text-lg font-bold mt-2">{selected.name}</h3>
            <p className="text-gray-500">{selected.service_name}</p>
            <p className="text-gray-500">{selected.description}</p>
            <p className="text-gray-500">{selected.phone1}</p>
            <p className="text-gray-500">{selected.phone2}</p>
            <p className="text-sm text-gray-400">تاريخ الانشاء: 2025/2/3</p>
            <p className="text-sm text-gray-400">تاريخ الانتهاء: 2025/2/3</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}</div>
  )
}

export default GetBuyId_
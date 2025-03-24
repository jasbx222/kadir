import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../componentes/loading/Loading";

const GetBuyId = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
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
        `https://back.kadrapp.com/admin/v1/category/${id}`,
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

  if (loading) {
    return <>
   <Loading/>
    </>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Category Details
      </h1>
      {category ? (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              Name:
            </span>
            <p className="text-lg text-gray-800 sm:w-3/4">{category.name}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <span className="font-semibold text-lg text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              Image:
            </span>
            <img
              src={category.image}
              alt={category.name}
              className="w-50 h-50 object-cover rounded sm:ml-4 border-4 border-gray-300"
            />
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-red-500"> 
        لا توجد اقسام حاليا !          </p>
      )}
    </div>
  );
};

export default GetBuyId;

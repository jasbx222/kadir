import { useEffect, useState } from "react";
import "./HomePage.css";
import ChartComponent from "../../componentes/chart/Charts";
import axios from "axios";

const HomePage = () => {
  const url = import.meta.env.VITE_URL_API;
  const [activeProfessionals, setActivePro] = useState();
  const [expiredProfessionals, setExePro] = useState();
  const [totalOrders, setTotalOrder] = useState();
  const  token=localStorage.getItem('token')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/home`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setActivePro(res.data);
        setExePro(res.data);
        setTotalOrder(res.data);
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-4 sm:py-6 lg:px-8">
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
            <dt className="order-last text-lg font-medium text-gray-500">
              الحرفين الفعال
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {activeProfessionals ? activeProfessionals.activeProfessionals : "جاري التحميل..."}
            </dd>
          </div>
        </dl>
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
            <dt className="order-last text-lg font-medium text-gray-500">
              الحرفين الاكسباير
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {expiredProfessionals ? expiredProfessionals.expiredProfessionals : "جاري التحميل..."}
            </dd>
          </div>
        </dl>
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
            <dt className="order-last text-lg font-medium text-gray-500">
              اجمالي الطلبات
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {totalOrders ? totalOrders.totalOrders : "جاري التحميل..."}
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col px-4 py-8 -z-30 text-center card-chart">
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;

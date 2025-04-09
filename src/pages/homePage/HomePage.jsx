import { useEffect, useState } from "react";
import "./HomePage.css";
import ChartComponent from "../../componentes/chart/Charts";
import axios from "axios";
import GetInfo from '../../componentes/methode/GetInfo';
import Loading from "../../componentes/loading/Loading";
import { BriefcaseBusiness, CalendarArrowDown, ShieldBan, UsersRound } from "lucide-react";
const HomePage = () => {
  const url = import.meta.env.VITE_URL_API;
  const [activeProfessionals, setActivePro] = useState();
  const [expiredProfessionals, setExePro] = useState();
  const [totalOrders, setTotalOrder] = useState();
  const  token=localStorage.getItem('token')
const totalprofessionals = GetInfo(`${url}/professional`)

  useEffect(
    
    () => {
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
    <div className="home md:w-[70%]">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-4 sm:py-6 lg:px-8 md:flex md:items-center sm:flex sm:items-center">
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
          <UsersRound size={40} className="mb-5" color="#2A3890"/>
            <dt className="order-last text-lg font-medium text-gray-500">
              اجمالي الحرفين 
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              { totalprofessionals.length}
            </dd>
          </div>
        </dl>
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
          <BriefcaseBusiness color="#2A3890" size={40} className="mb-5" />
            <dt className="order-last text-lg font-medium text-gray-500">
              الحرفين الفعال
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {activeProfessionals ? activeProfessionals.activeProfessionals : <Loading/>}
            </dd>
          </div>
        </dl>
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
          <ShieldBan  color="#2A3890" size={40} className="mb-5"  />
            <dt className="order-last text-lg font-medium text-gray-500">
              الحرفين الاكسباير
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {expiredProfessionals ? expiredProfessionals.expiredProfessionals : <Loading/>}
            </dd>
          </div>
        </dl>
        <dl className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
            <CalendarArrowDown  color="#2A3890" size={40} className="mb-5" />
            <dt className="order-last text-lg font-medium text-gray-500">
              اجمالي الطلبات
            </dt>
            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              {totalOrders ? totalOrders.totalOrders : <Loading/>}
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

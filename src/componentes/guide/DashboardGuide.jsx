import React from "react";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  Signpost,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DashboardGuide = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    swal({
      title: "مرحبا!",
      text: "لقد بدأت الآن باستخدام لوحة التحكم.",
      icon: "success",
      buttons: "الصفحة الرئيسية",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="min-h-screen relative top-24 md:top-0 p-6 flex flex-col items-center">
      {" "}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        دليل استخدام لوحة التحكم
      </h1>{" "}
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        {" "}
        هذه الصفحة توضح كيفية استخدام لوحة التحكم بشكل فعال. ستتمكن من إدارة
        المستخدمين، إعداد الإعدادات، ومتابعة التقارير بسهولة.{" "}
      </p>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {" "}
        <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center space-x-4">
          {" "}
          <LayoutDashboard className="w-12 h-12 text-blue-500" />{" "}
          <div>
            {" "}
            <Link to={"/homePageGuide"} className="text-xl font-semibold">
              الرئيسية
            </Link>{" "}
            <p className="text-gray-500">معلومات وإحصائيات سريعة.</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center space-x-4">
          {" "}
          <Users className="w-12 h-12 text-green-500" />{" "}
          <div>
            {" "}
            <Link to={"/guideProfshinal"} className="text-xl font-semibold">
              إدارة الحرفين
            </Link>{" "}
            <p className="text-gray-500">إضافة وتعديل الحرفين.</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center space-x-4">
          {" "}
          <Signpost className="w-12 h-12 text-yellow-500" />{" "}
          <div>
            {" "}
            <Link to={"/adsguide"} className="text-xl font-semibold">
              ادارة الاعلانات
            </Link>{" "}
            <p className="text-gray-500">ضبط تفضيلات النظام.</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center space-x-4">
          {" "}
          <BarChart3 className="w-12 h-12 text-purple-500" />{" "}
          <div>
            {" "}
            <Link to={"/ReportGuide"} className="text-xl font-semibold">
              التقارير
            </Link>{" "}
            <p className="text-gray-500">عرض بيانات وتحليلات.</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Link
        onClick={handleStart}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700"
      >
        {" "}
        البدء الآن{" "}
      </Link>{" "}
    </div>
  );
};

export default DashboardGuide;

import { useState } from "react";
import GetInfo from "../../componentes/methode/GetInfo";
import axios from "axios";

export default function AccountSettings() {
  const [newPassword, setnewPassword] = useState("");
  const url = import.meta.env.VITE_URL_API;
  const user = GetInfo(`${url}admin/v1/auth/profile`);
  const ChangePassword = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("you have no token ");
    }
    await axios.post(
      "admin/v1/auth/password/change/password", {  newPassword: newPassword, }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },}
    ).then(()=>{
      swal({
        title: "your password has been changeed",
        icon: "success",
        dangerMode: false,
        buttons: "ok",
      });
    window.location.href='/'
    })
  };
  return (
    <form onSubmit={ChangePassword} className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <>
        <h2 className="text-2xl font-bold mb-5 text-center">إعدادات الحساب</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">الاسم</label>
            <input
              type="text"
              value={user?.name ?? ""}
              className="w-full mt-1 p-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              value={user?.email ?? ""}
              className="w-full mt-1 p-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">كلمة المرور الجديدة</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            تحديث كلمة المرور
          </button>
        </div>
      </>
    </form>
  );
}

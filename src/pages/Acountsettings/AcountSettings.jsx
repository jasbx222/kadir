import { useState } from "react";
import GetInfo from '../../componentes/methode/GetInfo'

export default function AccountSettings() {
  const [newPassword, setnewPassword] = useState("");

  const handlePasswordChange = () => {
    swal({
      title: "تم تحديث الباسورد بنجاح",
      icon: "success",
      dangerMode: false,
    });
  };
  const url = import.meta.env.VITE_URL_API;
  const user = GetInfo(`${url}admin/v1/auth/profile`);

  return (
    <form className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
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
            onClick={handlePasswordChange}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            تحديث كلمة المرور
          </button>
        </div>
      </>
    </form>
  );
}

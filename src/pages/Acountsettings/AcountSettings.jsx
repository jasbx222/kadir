import { useState } from "react";
// import { useAuth } from "../../componentes/context/UseContext";
export default function AccountSettings() {
  // const { user } = useAuth();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const handlePasswordChange = () => {
    swal({
      title: "تم  تحديث الباسورد بنجاح",
      icon: "success",
      dangerMode: false,
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-5 text-center">إعدادات الحساب</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">الاسم</label>
          <input
            type="text"
            // value={user.name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">البريد الإلكتروني</label>
          <input
            type="email"
            // value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">كلمة المرور </label>
          <input
            type="password"
            // value={user.zipcode}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
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
          onClick={handlePasswordChange}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
        >
          تحديث كلمة المرور
        </button>
      </div>
    </div>
  );
}

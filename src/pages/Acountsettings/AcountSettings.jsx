import { useContext, useState } from "react";
import { Context } from "../../App";
export default function AccountSettings() {
  const user = useContext(Context);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const handlePasswordChange = () => {
    alert("Password updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-5">إعدادات الحساب</h2>
      <div className="space-y-4">
        <div>
          <div className="img">
            <img
              src={user.img}
              style={{
                width: "200px",
                height: "200px",
              }}
              alt=""
            />
          </div>
          <label className="block text-gray-700">الاسم</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">البريد الإلكتروني</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">كلمة المرور </label>
          <input
            type="password"
            value={user.password}
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

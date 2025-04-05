import React from "react";

const FormUpdatePassword = ({
  oldPassword,
  setoldPassword,
  newPassword,
  setnewPassword,
  confirmPassword,
  setnewConfirmPassword,
  handlChangePassword,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-2xl">
      <form onSubmit={handlChangePassword} className="space-y-4">
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setoldPassword(e.target.value)}
          name="oldPassword"
          placeholder="كلمة السر القديمة"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
          name="newPassword"
          placeholder="كلمة السر الجديدة"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setnewConfirmPassword(e.target.value)}
          placeholder="تاكيد كلمة السر"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          تحديث كلمة السر
        </button>
      </form>
    </div>
  );
};

export default FormUpdatePassword;

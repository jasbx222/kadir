import React, { useEffect, useRef, useState } from "react";
// import CryptoJS from "crypto-js";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    HandleSubmit;
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (email || password === "" || null)
      swal({
        title: "احد الحقول فارغة يرجى تعبئتها بالمعلومات المطلوبة",
        text: "هل تريد مغادرة الصفحة ؟",
        icon: "warning",
        dangerMode: true,
      });
  };

  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={HandleSubmit}
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            صفحة تسجيل دخول الادمن
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              الايميل
            </label>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                ref={input}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="ادخل ايميلك"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              الباسورد
            </label>
            <div className="relative">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="ادخل الباسورد"
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#8884d8" }}
            className="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

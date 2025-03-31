import { KeyRound } from "lucide-react";
import React from "react";
const Form = ({
  setEmail,
  setPassword,
  handleSubmit,
  email,
  password,
  input,
  isPending,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center "
          style={{
            border: "2px solid #2A3890",
            backgroundColor: "#2A3890",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        >
          <KeyRound color="#fff" size={40} />
        </div>
      </div>

      <p className="text-center text-lg font-medium">
        مرحبا بك في ادارة تطبيق كادر
      </p>

      <div>
        <label htmlFor="email" className="sr-only">
          الايميل
        </label>
        <div className="relative">
          <input
            type="email"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="ادخل الباسورد"
          />
        </div>
      </div>

      <button
      disabled={isPending}
        type="submit"
        style={{ backgroundColor: "#2A3890" }}
        className={`block w-full rounded-lg px-5 py-3 text-sm font-medium ${
          isPending ? "text-red-500" : "text-white"
        }`}
        
      >
        {isPending ? "جاري الدخول" : "  تسجيل الدخول"}
      </button>
    </form>
  );
};

export default Form;

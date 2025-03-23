import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://back.kadrapp.com";

    try {
      const response = await fetch(`${url}/admin/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      if (data.token) {
        // حفظ التوكن في localStorage
        localStorage.setItem("token", data.token);
        console.log("تم تسجيل الدخول بنجاح، التوكن:", data.token);

      } else {
        console.error("لم يتم استلام توكن من السيرفر.");
      }
    } catch (error) {
      console.error("خطأ أثناء تسجيل الدخول:", error.message);
    }
  };

  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <Form
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          email={email}
          password={password}
          input={input}
        />
      </div>
    </div>
  );
};

export default Login;

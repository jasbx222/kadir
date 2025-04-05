import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import Form from "./Form";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setisPending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_URL_API;

    try { 
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();

      if (data.token) {
     localStorage.setItem("token", data.token);
      } else {
        console.error("لم يتم استلام توكن من السيرفر.");
      }
      setisPending(true);
      window.location.href = "/";
    } catch (error) {
      swal({
        title: " تاكد من ادخال الايميل والباسوورد او تاكد من الاتصال بالسيرفر!",
        timer: 5000,
        icon: "warning",
        dangerMode: true,
      });
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
          isPending={isPending}
        />
      </div>
    </div>
  );
};

export default Login;

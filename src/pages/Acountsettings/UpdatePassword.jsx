import axios from "axios";
import React, { useState } from "react";
import FormUpdatePassword from "./FormUpdatePassword";
const UpdatePassword = () => {
  const url = import.meta.env.VITE_URL_API;
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setnewConfirmPassword] = useState("");
  const handlChangePassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("old_password", oldPassword);
    formData.append("new_password", newPassword);
    formData.append("new_password_confirmation", confirmPassword);
    if (oldPassword === "") {
      swal({
        title: "كلمة السر القديمة مطلوبة",
        icon: "error",
        dangerMode: true,
        buttons: "ok",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      swal({
        title: "كلمة السر غير متطابقة",
        icon: "error",
        dangerMode: true,
        buttons: "ok",
      });
      return;
    }
    if (!token) {
      throw new Error("you have no token ");
    }
    await axios
      .post(`${url}/auth/change-password`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        localStorage.removeItem("token");
        swal({
          title: "your password has been changeed",
          timer: 5,
          icon: "success",
          dangerMode: false,
          buttons: "ok",
        });
        window.location.href = "/";
      });
  };
  return (
    <FormUpdatePassword
      oldPassword={oldPassword}
      setoldPassword={setoldPassword}
      newPassword={newPassword}
      setnewPassword={setnewPassword}
      confirmPassword={confirmPassword}
      setnewConfirmPassword={setnewConfirmPassword}
      handlChangePassword={handlChangePassword}
    />
  );
};

export default UpdatePassword;

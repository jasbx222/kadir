import axios from 'axios';
import React, { useState } from 'react'
import FormUpdatePassword from './FormUpdatePassword';

const UpdatePassword = () => {
    const url = import.meta.env.VITE_URL_API;
    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [confirmPassword, setnewConfirmPassword] = useState("");
    const handlChangePassword = async (e) => {
        e.preventDefault()
        const token =window.sessionStorage.getItem('token')
        const formData={
            oldPassword:oldPassword,
            newPassword:newPassword,
            confirmPassword:confirmPassword
        }
        if (!token) {
          throw new Error("you have no token ");
        }
        await axios.post(
          `${url}admin/v1/auth/change-password`, formData, {
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
<  FormUpdatePassword
oldPassword={oldPassword}
setoldPassword={setoldPassword}
newPassword={newPassword}
setnewPassword={setnewPassword}
confirmPassword={confirmPassword}
setnewConfirmPassword={setnewConfirmPassword}
handlChangePassword={handlChangePassword}


/>
  )
}

export default UpdatePassword
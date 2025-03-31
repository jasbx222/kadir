import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Logout = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_API;
  const token =window.sessionStorage.getItem('token')

  useEffect(() => {
    swal({
      title: "هل أنت متأكد من عملية تسجيل الخروج؟",
      icon: "warning",
      buttons: ["إلغاء", "نعم"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        axios
          .post(
            `${url}admin/v1/auth/logout`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            const token =window.sessionStorage.removeItem('token')
            window.location.href = "/login";
          })
          .catch((error) => {
          swal({
            title:'خطا في تسجيل الخروج !'+error,
            icon:'warning',
            dangerMode:true
          })
          });
      } else {
        navigate("/");
      }
    });
  }, []);

  return null;
};

export default Logout;

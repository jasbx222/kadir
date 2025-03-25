import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Logout = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL_API;
  const token = localStorage.getItem("token");

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
            localStorage.removeItem("token");
            window.location.href = "/";
          })
          .catch((error) => {
            console.error(
              "Logout failed:",
              error.response?.data || error.message
            );
          });
      } else {
        navigate("/home");
      }
    });
  }, []);

  return null;
};

export default Logout;

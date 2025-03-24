import { useEffect } from "react";
import swal from "sweetalert";

const Logout = () => {
  useEffect(() => {
    swal({
      title: "هل أنت متأكد من عملية تسجيل الخروج؟",
      icon: "warning",
      buttons: ["إلغاء", "نعم"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }else if (!willLogout){
        window.location.href = "/";
      }
    });
  
  }, []);

  return null;
};

export default Logout;

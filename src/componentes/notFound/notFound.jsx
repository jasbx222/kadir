import React from "react";
import { useRoutes } from "react-router-dom";
import swal from "sweetalert";
const Notfound = () => {
  swal({
    title: "للاسف هذا الصفحة غير موجودة",
    text: " OK للرجوع الى الصفحة الرئيسية اضغط ",
    icon: "warning",
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      window.location.pathname = "/";
    }
  });
  return <></>;
};

export default Notfound;

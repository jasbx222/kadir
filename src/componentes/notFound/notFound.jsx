
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Notfound = () => {
  const navigate =useNavigate()
  swal({
    title: 'الصفحة غير موجودة',
    buttons: {
      cancel: "الغاء",
      confirm: "الصفحة الرئيسية",
    },
    text: "الرجاء التوجه الى الصفحة الرئيسية",

    icon: "warning",
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
     navigate ("/")
    }
  });
  return <></>;
};

export default Notfound;

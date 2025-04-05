
import { useEffect } from "react";
import DeleteMethod from "../../../componentes/methode/DeleteMethod";
import { useNavigate, useParams } from "react-router-dom";

const DeletePro = () => {
    const navigate=useNavigate()
    const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const deletepro = DeleteMethod(`${url}/professional`, id);

 useEffect(()=>{
  swal({
    title: "تم الحذف بنجاح ",
    icon: "success",
    buttons:  'رجوع',
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
        deletepro
      navigate('/professional')
    }
  });
 },[])
  

  return null;
};

export default DeletePro;

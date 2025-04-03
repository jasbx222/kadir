import { useEffect } from "react";
import DeleteMethod from "../../../componentes/methode/DeleteMethod";
import { useNavigate, useParams } from "react-router-dom";

const DeleteOrder = () => {
    const navigate=useNavigate()
    const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const deleteAds = DeleteMethod(`${url}admin/v1/order`, id);

 useEffect(()=>{
  swal({
    title: "تم الحذف بنجاح ",
    icon: "success",
    buttons:  'رجوع',
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      deleteAds
      navigate('/request')
    }
  });
 },[])
  

  return null;
};

export default DeleteOrder;

import { useEffect } from "react";
import DeleteMethod from "../../componentes/methode/DeleteMethod";
import { useNavigate, useParams } from "react-router-dom";

const DeleteAdsItem = () => {
    const navigate=useNavigate()
    const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const deleteAds = DeleteMethod(`${url}admin/v1/ads`, id);

 useEffect(()=>{
  swal({
    title: "تم الحذف بنجاح ",
    icon: "success",
    buttons:  'رجوع',
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      deleteAds
      navigate('/ads')
    }
  });
 },[])
  

  return null;
};

export default DeleteAdsItem;

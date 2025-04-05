import { useEffect } from "react";
import DeleteMethod from "../../../componentes/methode/DeleteMethod";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCategory = () => {
  const url = import.meta.env.VITE_URL_API;
  const { id } = useParams();
  const deleteCat = DeleteMethod(`${url}/category`, id);
const navigate=useNavigate()

 useEffect(()=>{
  swal({
    title: "تم الحذف بنجاح ",
    icon: "success",
    buttons:  'رجوع',
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      deleteCat
        navigate('/AddCategoryManager');
    }
  });
 },[])

  return null;
};

export default DeleteCategory;

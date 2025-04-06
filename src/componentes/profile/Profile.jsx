import { Avatar } from "@mui/material";
import { Context } from "../../App";
import { useContext } from "react";
import './Profile.css'
import { Link } from "react-router-dom";
export default function Profile() {
  const user = useContext(Context);
  return (
    <div className="profile" >
   <Link to={'/accountSettings'}>
   
   <Avatar
        style={{ border: "2px solid gray", margin: 10 }}
        alt="GeeksforGeeks Pic 1"
        src={user.img}
      />

   </Link>
    </div>
  );
}

import { Avatar } from "@mui/material";
import { Context } from "../../App";
import { useContext } from "react";
import './Profile.css'
export default function Profile() {
  const user = useContext(Context);
  return (
    <div className="profile" >
      <p>{user.name}</p>
      <Avatar
        style={{ border: "2px solid gray", margin: 10 }}
        alt="GeeksforGeeks Pic 1"
        src={user.img}
      />
    </div>
  );
}

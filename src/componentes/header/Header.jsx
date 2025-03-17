import React, { useContext } from "react";
import Profile from "../profile/Profile";
import { Context } from "../../App";
import Notification from "./Notification";

const Header = () => {
  const user = useContext(Context);

  return (
    <div className="flex justify-between items-center    p-4 bg-white shadow-md w-full">
      <div className="hidden md:flex">{""}</div>

      <div className=" relative left-80 top-24 md:top-0 md:mr-10 md:static md:left-0">
      <Notification />
      </div>
    </div>
  );
};

export default Header;

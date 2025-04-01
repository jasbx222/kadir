import { House } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const SideMenuLink = ({ label, href, icon }) => {
  return (
    <Link to={href} className="flex items-center gap-2 p-3 hover:bg-gray-700">
      {icon}
      {label}
    </Link>
  );
};

export default SideMenuLink;

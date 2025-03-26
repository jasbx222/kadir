import { Link } from "react-router-dom";
import { SideMenuUL } from "./SideMenuData";
import logo from "../../assets/img/kadirs.jpg";
import { useState } from "react";
import {
  BadgePlus,
  ClipboardPlus,
  GitPullRequest,
  House,
  LogOut,
  Settings,
  Shapes,
  Signpost,
  User,
} from "lucide-react";
import "./SideMenu.css";
export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`
          fixed
          overflow-auto 
         
           z-30 top-0 left-0 h-full  sidemenu text-white w-64 transform 
          "translate-x-0"  "-translate-x-full
         transition-transform duration-300 ease-in-out md:translate-x-0
          
          `}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            <img className="logo" src={logo} alt="" />
          </h2>
        </div>
        {SideMenuUL.map((links,index) => (
          <nav key={index} className="mt-4">
            {/* <div className="user text-center">   <h1>Hello {user}</h1></div> */}
            <Link
              to="/"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <House /> {links.homePage}
            </Link>
            <Link
              to="/professional"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <Shapes /> {links.artisans}
            </Link>

            <Link
              to="/request"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
            >
              <GitPullRequest /> {links.request}
            </Link>
        
            <Link
              to="/ads"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <Signpost /> {links.ads}
            </Link>
            <Link
              to="/reports"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <ClipboardPlus /> {links.reports}
            </Link>
            <div className="relative inline-block">
              {/* Button to open dropdown */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ width: "250px" }}
                className="flex  items-center   gap-2 p-3  text-white px-4 py-2 hover:bg-gray-700 transition"
              >
                <Settings />
                {links.setting}
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute  left-0 mt-2 w-56bg-gray-800 shadow-lg rounded-lg border border-gray-950 z-10">
                  <ul className="py-1">
                    <li>
                      <Link
                        style={{ width: "250px" }}
                        to="/accountSettings"
                        className="flex  items-center   gap-2 p-3  text-white px-4 py-2 hover:bg-gray-700 transition"
                      >
                        <User /> {links.accountSettings}
                      </Link>
                    </li>
                    <li>
                    <Link
              to="/AddCategoryManager"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
            >
              <BadgePlus /> {links.addDepartment}
            </Link>
                    </li>
                    <li>
                      <Link
                        style={{ width: "250px" }}
                        to="/logout"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
                      >
                        <LogOut /> {links.logout}
                      </Link>
                    </li>
                  
                  </ul>
                </div>
              )}
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
}

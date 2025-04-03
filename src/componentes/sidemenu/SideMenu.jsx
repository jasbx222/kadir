import { Link } from "react-router-dom";
import logo from "../../assets/img/kadirs.jpg";
import { useState } from "react";
import {
  BadgePlus,
  ClipboardPlus,
  GitPullRequest,
  HouseIcon,
  FileWarning,
  LogOut,
  Settings,
  Shapes,
  Signpost,
  User,
  CalendarCog,
} from "lucide-react";
import "./SideMenu.css";
import { MdPolicy } from "react-icons/md";
import SideMenuLink from "./SideMenuLink";
import { RiGuideLine } from "react-icons/ri";
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

        <nav className="mt-4 ">
          {/* <div className="user text-center">   <h1>Hello {user}</h1></div> */}
          <SideMenuLink
            href={"/"}
            label={"الصفحة الرئيسية"}
            icon={<HouseIcon />}
          />

          <SideMenuLink
            href={"/professional"}
            label={"الحرفين "}
            icon={<Shapes />}
          />

          <SideMenuLink
            href={"/request"}
            label={"الطلبات والتقارير "}
            icon={<GitPullRequest />}
          />

          <SideMenuLink
            href={"/ads"}
            label={"الاعلانات "}
            icon={<Signpost />}
          />

          <div className="relative inline-block">
            {/* Button to open dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ width: "250px" }}
              className="flex  items-center   gap-2 p-3  text-white px-4 py-2 hover:bg-gray-700 transition"
            >
              <Settings />
              الاعدادات
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute  left-0 mt-2 w-56bg-gray-800 shadow-lg rounded-lg border border-gray-950 z-10">
                <ul className="py-1">
                  <li>
                    <SideMenuLink
                      href={"/accountSettings"}
                      label={"اعدادات المستخدم "}
                      icon={<User />}
                    />
                  </li>
                  <li>
                    <SideMenuLink
                      href={"/AddCategoryManager"}
                      label={"اضافة قسم  "}
                      icon={<BadgePlus />}
                    />
                  </li>
                  <li>
                    <SideMenuLink
                      href={"/policy"}
                      label={"الشروط و الاستخدام"}
                      icon={<FileWarning />}
                    />
                  </li>
                  <li>
                    <SideMenuLink
                      href={"/logout"}
                      icon={<LogOut />}
                      label={"تسجيل خروج"}
                    />
                  </li>
                 
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

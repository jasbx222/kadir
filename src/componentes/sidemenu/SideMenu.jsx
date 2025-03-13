import { Link } from "react-router-dom";
import { SideMenuUL } from "./SideMenuData";
import logo from "../../assets/img/kadir.jpg";
import { useState } from "react";
import {
  BadgePlus,
  ChevronDown,
  ClipboardPlus,
  GitPullRequest,
  House,
  MapPin,
  Search,
  Settings,
  Shapes,
  Signpost,
} from "lucide-react";
import "./SideMenu.css";
export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`
          fixed
         
           z-30 top-0 left-0 h-full  bg-black text-white w-64 transform 
          "translate-x-0"  "-translate-x-full
         transition-transform duration-300 ease-in-out md:translate-x-0
          
          `}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            <img className="logo" src={logo} alt="" />
          </h2>
        </div>
        {SideMenuUL.map((links) => (
          <nav className="mt-4">
            <Link
              to="/home"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <House /> {links.homePage}
            </Link>
            <Link
              to="/artisans"
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
              to="/reports"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <ClipboardPlus /> {links.reports}
            </Link>
            <Link
              to="/ads"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <Signpost /> {links.ads}
            </Link>
            <Link
              to="/department"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
            >
              <BadgePlus /> {links.addDepartment}
            </Link>
            <div className="relative inline-block">
              {/* Button to open dropdown */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ width: "250px" }}
                className="flex  items-center   gap-2 p-3 bg-black text-white px-4 py-2 hover:bg-gray-700 transition"
              >
                <ChevronDown size={30} />
                المزيد
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute  left-0 mt-2 w-56bg-gray-800 shadow-lg rounded-lg border border-gray-950 z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
                      >
                        <Settings /> {links.setting}
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/location"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-900 transition"
                      >
                       <MapPin /> {links.location}
                      </Link>
                    </li>
                    <li></li>
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

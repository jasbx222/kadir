import { Link } from "react-router-dom";
import { SideMenuUL } from "./SideMenuData";
import logo from "../../assets/img/kadir.jpg";
import {
  Bell,
  ClipboardPlus,
  GitPullRequest,
  House,
  Settings,
  Shapes,
  ShoppingCartIcon,
} from "lucide-react";
import "./SideMenu.css";
export default function SideMenu() {
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
              <Shapes /> {links.harfi}
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <ShoppingCartIcon /> {links.market}
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <Bell /> {links.notic}
            </Link>
            <Link
              to="/reports"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <ClipboardPlus /> {links.reports}
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <GitPullRequest /> {links.request}
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 p-3 hover:bg-gray-700"
            >
              <Settings /> {links.setting}
            </Link>
          </nav>
        ))}
      </div>
    </div>
  );
}

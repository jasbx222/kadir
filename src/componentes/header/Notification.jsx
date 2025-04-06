import { useState } from "react";
import { BellRingIcon } from "lucide-react";
import { Link } from "react-router-dom";
import GetInfo from "../methode/GetInfo";
import "./Header.css";
const Notification = () => {
  const url = import.meta.env.VITE_URL_API;
  const [isOpen, setIsOpen] = useState(false);
  const notifData = GetInfo(`${url}/order`);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative  right-10 md:right-0 notif  md:left-0 sm:left-24  p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
      >
        {notifData.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
            {notifData.length}
          </span>
        )}
        <BellRingIcon className="w-7 h-7 text-white" />
      </button>

      {isOpen && (
        <div
          dir="rtl"
          className={` absolute  right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-72 z-50 transition-transform duration-300`}
        >
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-3 flex items-center gap-2">
            🔔 الإشعارات
          </h3>
          {notifData.length > 0 ? (
            <ul className="space-y-3 max-h-60 overflow-auto">
              {notifData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-sm"
                >
                  <Link
                    to={`/request`}
                    className="text-gray-900 font-medium hover:text-indigo-600 transition"
                  >
                    {item.professional.name || "لا يوجد إشعار"}
                  </Link>
                  <Link
                    to={`request/`}
                    className="text-red-500 text-sm font-semibold hover:text-red-700 transition"
                  >
                    ({item.professional.connection_count || "0"} - اتصال)
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm text-center">لا توجد إشعارات</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;

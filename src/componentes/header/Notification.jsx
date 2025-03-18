import { useState } from "react";
import { BellRingIcon, X } from "lucide-react";
import { NotifData } from "./NotifData";
import { Link } from "react-router-dom";
import './Header.css';
const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block notif">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
        {
          NotifData.length
        }
        </span>
        <BellRingIcon className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <div
          dir="rtl"
          className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            الإشعارات
          </h3>
          {NotifData.map((li) => (
            <ul>
              <li className="p-2 border-b flex text-gray-600 hover:bg-gray-100">
                <Link to={"/request"}>{li.title} </Link>
                <X color="red" />
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;

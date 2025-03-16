import { useState } from "react";
import { BellRingIcon } from "lucide-react";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
          3
        </span>
        <BellRingIcon className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            الإشعارات
          </h3>
          <ul>
            <li className="p-2 border-b text-gray-600 hover:bg-gray-100">
              إشعار 1{" "}
            </li>
            <li className="p-2 border-b text-gray-600 hover:bg-gray-100">
              إشعار 2{" "}
            </li>
            <li className="p-2 text-gray-600 hover:bg-gray-100">إشعار 3 </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;

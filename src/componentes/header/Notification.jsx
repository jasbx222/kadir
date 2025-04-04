import { useEffect, useState } from "react";
import { BellRingIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";
// import { GetInfo } from "../../componentes/methode/GetInfo";
import axios from "axios";

const Notification = () => {
  const url = import.meta.env.VITE_URL_API;
  const [notifData, setNotifData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}admin/v1/order
`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response) {
          setNotifData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative inline-block notif">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        {notifData.length > 0 && ( // التحقق من وجود إشعارات قبل عرض الرقم
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
            {notifData.length}
          </span>
        )}
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
          {notifData.length > 0 ? (
            notifData.map((item, index) => (
              <ul
                key={index}
                className=" flex justify-around items-center gap-2"
              >
                <Link
                  to={`/veiw_professional/${item.professional.id}`}
                  className="text-gray-900 "
                >
                  {item.professional.name || " لايوجد اشعار"}{" "}
                </Link>

                <Link
                  to={`/veiw_professional/${item.professional.id}`}
                  className="text-red-400  *:hover:text-red-600
                mt-2 text-sm font-semibold"
                >
                  ( {item.professional.connection_count || "لا يوجد اشعار"}-
                  {"اتصال "})
                </Link>
              </ul>
            ))
          ) : (
            <p className="text-gray-500 text-sm">لا توجد إشعارات</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;

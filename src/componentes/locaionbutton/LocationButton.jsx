import { useState, useEffect } from "react";
import swal from "sweetalert";
import "./LocationButton.css";
export default function LocationButton() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleGetLocation = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(googleMapsUrl, "_blank");
        setLoading(false);
      },
      (error) => {
        swal("تعذر الحصول على الموقع", error.message, "error");
        setLoading(false);
      }
    );
  };
  const HandleAlret = () => {
    swal({
      text: "هل تريد تحديد موقعك؟",
      buttons: {
        confirm: {
          text: "نعم، حدد موقعي",
          value: true,
        },
        cancel: "لا",
      },
    }).then((willSearch) => {
      if (willSearch) {
        handleGetLocation();
      }
    });
  };
  return (
    <div className="flex map justify-center items-center   ">
      <button
        onClick={HandleAlret}
        className=" btnMap relative top-40 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition"
        disabled={loading}
      >
        {loading ? "جاري تحديد الموقع..." : "اذهب إلى موقعي"}
      </button>
    </div>
  );
}

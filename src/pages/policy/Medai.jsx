import React, { useState } from "react";
import axios from "axios";

const Media = () => {
  const [facebookUrl, setFacebookUrl] = useState("");
  const [telegramUrl, setTelegramUrl] = useState("");
  const url = import.meta.env.VITE_URL_API;
  const formData = {
    facebook_url: facebookUrl,
    telegram_url: telegramUrl,
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${url}admin/v1/setting`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      swal({
        title: "تم ارسال بياناتك بنجاح",
        icon: "success",
        dangerMode: false,
      });
    } catch (error) {
      console.error(
        "Error adding category:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-28 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        أضف روابط السوشيال ميديا
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="url"
          name="facebook"
          placeholder="رابط الفيسبوك"
          value={facebookUrl}
          onChange={(e) => setFacebookUrl(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          name="telegram"
          placeholder="رابط التلغرام"
          value={telegramUrl}
          onChange={(e) => setTelegramUrl(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          ارسال الروابط
        </button>
      </form>
    </div>
  );
};

export default Media;

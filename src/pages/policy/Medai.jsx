import React, { useState } from "react";

const Media = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Social Media Links:", socialLinks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">أضف روابط السوشيال ميديا</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="url"
          name="facebook"
          placeholder="رابط الفيسبوك"
          value={socialLinks.facebook}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          name="twitter"
          placeholder="رابط تويتر"
          value={socialLinks.twitter}
          onChange={handleChange}
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
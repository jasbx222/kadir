import React, { useState } from "react";
import FormMedai from "./FormMedai";

const Media = () => {
  const [socialLinks, setSocialLinks] = useState()

  const handleChange = (e) => {
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Social Media Links:", socialLinks);
  };

  return (
 <FormMedai  
 handleChange={handleChange}
 handleSubmit={handleSubmit}
 socialLinks={socialLinks}
 />
  );
};

export default Media;
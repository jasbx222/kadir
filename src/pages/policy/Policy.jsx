import axios from "axios";
import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";
const Policy = () => {
  const [advertisement_terms, setAdvertisement_terms] = useState("");
  const [terms_conditions, setTerms_conditions] = useState("");
  const [isPending, setIspending] = useState(false);
  const url = import.meta.env.VITE_URL_API;
  const  token=localStorage.getItem('token')
  const formData = {
    terms_conditions: terms_conditions,
    advertisement_terms: advertisement_terms,
  };
  const handleSubmit = async (e) => {
    setIspending(true);
    e.preventDefault();

    try {
      await axios.post(`${url}/setting`, formData, {
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
      console.error(error);
    }
    setIspending(false);
  };
  return (
    <div className="md:relative md:left-32">
      
      <div className="text-center relative md:right-10 top-32">
      <div className="text-center relative bottom-9 flex justify-center items-center">
        <CiWarning size={40} color="red"/>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-4  rounded-lg ">
            <div className="px-4 py-2 bg-white rounded-t-lg ">
              <label className=" text-black">الشروط للاعلانات</label>
              <textarea
                value={advertisement_terms}
                onChange={(e) => setAdvertisement_terms(e.target.value)}
                style={{ border: "2px solid gray" }}
                rows="5"
                cols={100}
                className="w-full rounded px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0  "

              ></textarea>
            </div>
            <div className="px-4 py-2 bg-white rounded-t-lg ">
              <label className=" text-black">طريقة استخدام التطبيق</label>
              <textarea
                dir="ltr"
                value={terms_conditions}
                onChange={(e) => setTerms_conditions(e.target.value)}
                style={{ border: "2px solid gray" }}
                rows="5"
                cols={100}
                className="w-full rounded   px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 "
        
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t  border-gray-200">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
              >
                {
                  isPending? "جاري التحميل..." : "إرسال"
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Policy;

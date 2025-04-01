import React from 'react';

const AdsGuide = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800">دليل استخدام الإعلانات</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>صفحة الإعلانات مخصصة لإضافة الإعلانات فقط عن طريق لوحة التحكم، وستظهر في التطبيق.</li>
        <li>هناك كلمتان محجوزتان، وفي حال استخدمت غيرهما، لن يتم إرسال الإعلان.</li>
        <li className="font-semibold text-gray-900">الكلمات المحجوزة: <span className="text-blue-600">"banner" و "slider"</span></li>
        <li>
          <span className="font-medium text-gray-900">البنر</span> هو الإعلان الذي يظهر في أسفل التطبيق، 
          بينما <span className="font-medium text-gray-900">السلايدر</span> هو إعلان يظهر في الأعلى على شكل شريط متحرك.
        </li>
        <li>لديك صلاحية التعديل والحذف والاضافة</li>
      </ol>
    </div>
  );
};

export default AdsGuide;
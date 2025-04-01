import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800">دليل الصفحة الرئيسية</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>تحتوي الصفحة الرئيسية على ثلاث خيارات لعرض نتائج عمل التطبيق.</li>
        <li>
          <span className="font-medium text-gray-900">إجمالي الطلبات:</span> يشمل جميع الطلبات التي تم تنفيذها من قبل الحرفيين.
        </li>
        <li>
          <span className="font-medium text-gray-900">إجمالي الحرفيين الفعّالين:</span> هم الحرفيون الذين لم تنتهِ صلاحية حساباتهم بعد.
        </li>
        <li>
          <span className="font-medium text-gray-900">الحرفيون المنتهية صلاحيتهم:</span> هم الحرفيون الذين انتهت صلاحية حساباتهم.
        </li>
        <li>
          <span className="font-medium text-gray-900">التقارير الشهرية:</span> يمكنك من خلالها رؤية الإحصائيات والتقارير الشهرية للطلبات.
        </li>
      </ol>
    </div>
  );
};

export default Home;

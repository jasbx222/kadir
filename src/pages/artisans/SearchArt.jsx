import React, { useState } from 'react';
import './Artisans.css'
const artisansData = [
  { id: 1, name: 'Ahmed Ali' },
  { id: 2, name: 'Mona Farouk' },
  { id: 3, name: 'Tarek Hassan' },
  { id: 4, name: 'sarah Maher' },
  { id: 5, name: 'Khaled Salah' },
];

const SearchArt = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setFilteredArtisans([]); // عندما لا يكون هناك نص، نعرض صفحة فارغة
    } else {
      setFilteredArtisans(
        artisansData.filter((artisan) =>
          artisan.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
   
    




      
<form className="flex items-center relative top-10 max-w-sm mx-auto mt-10">   
    <label  className="sr-only">ابحث عن حساب الحرفي</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text"  value={searchTerm} 
        onChange={handleSearch} id="simple-search"    placeholder="ابحث عن حرفي..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    </div>
    <button  type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
   
    </button>
</form>
{filteredArtisans.length > 0 ? (
        <ul className="space-y-3  relative top-12 ">
          {filteredArtisans.map((artisan) => (
            <li key={artisan.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
              {artisan.name}
            </li>
          ))}
        </ul>
      ) : (
        // عرض رسالة أو لا شيء إذا لم يكن هناك نتائج
        searchTerm && (
          <p className="text-gray-500 mt-4">لا توجد نتائج للبحث: "{searchTerm}"</p>
        )
      )}
    </div>
  );
};

export default SearchArt;

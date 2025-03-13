import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { requestData } from './requestData';
const Requests = () => {
  return (
 

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          الطلبات

        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                اسم مقدم الخدمه
                </th>
                <th scope="col" class="px-6 py-3">
                تاريخ وقت العملية
                </th>
                <th scope="col" class="px-6 py-3">
            عدد مرات الاتصال
                </th>
                <th scope="col" class="px-6 py-3">
            الاجرائات
                </th>
          
            </tr>
        </thead>
        <tbody>
        {
            requestData.map((r)=>(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {r.service_provider_name}
                </th>
                <td class="px-6 py-4">
                {r.operation_date_time}
                </td>
                <td class="px-6 py-4">
                {r.number_of_calls}
                </td>
            
                <td class="px-6 py-4  flex justify-between items-center gap-5">
                    <Link to={`/requestid/${r.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FaPen size={25}/></Link>
                    <Link href="#" class="font-medium text-lime-400 dark:text-blue-500 hover:underline"><FaRegEye size={25}/></Link>
                    <Link href="#" class="font-medium text-red-500 dark:text-blue-500 hover:underline"><MdDelete size={25}/></Link>
               
                </td>
            </tr>
            ))
        }
         
        
        </tbody>
    </table>
</div>

  )
}

export default Requests
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import React from 'react';

const DeleteButton = ({ id, onDeleteSuccess }) => {
    const deleteCat = async () => {
        if (!window.confirm('هل انت متاكد من حذف هذا القسم ؟')) return;

        const token = localStorage.getItem('token');
   

        try {
            await axios.delete(`https://back.kadrapp.com/admin/v1/category/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            swal({
                title:"تم الحذف بنجاح   ",
                icon: "success",
                dangerMode: false,
              });;
            if (onDeleteSuccess) {
                onDeleteSuccess(id); // Remove the deleted item from UI
            }
        } catch (error) {
            console.error('Error deleting item:', error.response?.data || error.message);
            alert('فشل الحذف !');
        }
    };

    return (
        <button 
            className="bg-red-500 text-white px-2 py-1 m-2 rounded" 
            onClick={deleteCat}
        >
            <Trash2 />
        </button>
    );
};

export default DeleteButton;

import React, { useContext } from 'react';
import Profile from '../profile/Profile';
import { Context } from '../../App';
import Notification from './Notification';

const Header = () => {
  const user = useContext(Context);
  
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md w-full">
      
      
      <div className="relative">
        <Notification />
      </div>
    </div>
  );
};

export default Header;

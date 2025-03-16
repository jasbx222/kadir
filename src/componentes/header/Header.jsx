import React, { useContext } from 'react';
import Profile from '../profile/Profile';
import { Context } from '../../App';
const Header = () => {
  const user = useContext(Context)
  return (
    <div className='flex  relative  bottom-5 ml-2  right-72 md:static md:top-0  justify-between items-center '>
<div className="profile md:ml-5">
  <Profile/>

</div>
<div style={{width:'200px'}} className="username mr-2 md:flex hidden   justify-around gap-5 items-center">
<h3>{user.name}</h3>
</div>

    </div>
  )
}

export default Header;
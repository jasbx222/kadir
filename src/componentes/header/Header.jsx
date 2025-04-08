import Notification from "./Notification";
import './Header.css';
const Header = () => {
  return (
    <div className="flex justify-between items-center     p-4 bg-white  w-full">
      <div className="hidden md:flex">{""}</div>

      <div className=" relative notif left-80 top-24 md:top-0 md:mr-10 md:static md:left-0">
        <Notification />
      </div>
    </div>
  );
};

export default Header;

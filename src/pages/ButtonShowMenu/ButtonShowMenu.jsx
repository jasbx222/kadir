import SideMenu from "../../componentes/sidemenu/SideMenu";
import "./ButtonShowMenu.css";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
const ButtonShowMenu = () => {
  const [show, setShow] = useState(true);
  const HandleButtonMenu = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn" onClick={HandleButtonMenu}>
        <AlignJustify size={40} />{" "}
      </button>
      <div className="flex justify-around items-center">
        {show ? <SideMenu /> : ""}
      </div>
    </div>
  );
};

export default ButtonShowMenu;

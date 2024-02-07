import React from 'react'
import { LuHome } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { TbDoorExit } from "react-icons/tb";
import { useNavigate} from 'react-router-dom';


export const Navbar = () => {
  const navigate = useNavigate();

  function Logout() {
    localStorage.setItem("unique_id","")
    navigate('/login');
  }
  return (
    <div className='is-flex-direction-column is-align-items-center navbar'>
      <h3 className='mb-3 stylefont'>pico</h3>
      <nav>
          <div className='Upper'>
              <li className='listItems'><LuHome size={20}/></li>
              <li className='listItems'><FaRegCircleUser size={20}/></li>
              <li className='listItems'><BsChatDots size={20}/></li>
              <li className='listItems'><GoGear size={20}/></li>
          </div>
          <div className='Lower'>
              <li className='listItems' onClick={()=>Logout()}><TbDoorExit size={20}/></li>
          </div>
      </nav>
    </div>
  )
}

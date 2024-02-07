import React, { useState } from 'react'
import ListItems from './ListItems'
import { GoPaperclip } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Details from './Details';
import { FaTimes } from "react-icons/fa";



export const Chat = () => {
  const [modal,setModal] = useState(false)

  
  return (
    <div className='ChatArea'>
        <div className='is-flex is-align-items-center'>
          <ListItems username={"Kayla"} image={"https://api.slingacademy.com/public/sample-users/1.png"} last_message={"offline"}  time={""}  />
          <IoIosInformationCircleOutline color='grey' fontSize={20} className='mr-4' onClick={()=>setModal(true)} />
        </div>
          <div className='chatList'></div>
          <div className='is-flex messageInputArea'>
            <div className='messageInput'>
              <GoPaperclip size={20} className='mx-3' />
              <input placeholder='Message' className='' />
            </div>
            <button className='mr-3'><FaPaperPlane size={20} color='white' /></button>
          </div>
      <div className={modal ?"visible mymodal":"mymodal"}>
        <FaTimes className='mb-2 mt-3 ml-4' size={20} onClick={()=>setModal(false)} />
        <Details />
      </div>
    </div>
  )
}

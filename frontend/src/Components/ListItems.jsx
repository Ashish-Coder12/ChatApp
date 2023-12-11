import React from 'react'

export default function ListItems({
    username,
    last_message,
    image,
    time
}) {

  return (
    <div className='ProfileItems is-flex is-align-items-center flex1'>
        <img src={image == "" || image == undefined  ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : image} alt="image1" />
        <div className='ml-5 name_area' >
            <h3 >{username}</h3>
            <p>{last_message}</p>
        </div>
        <p>{time}</p>
    </div>
  )
}

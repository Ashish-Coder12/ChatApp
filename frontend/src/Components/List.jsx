import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import ListItems from './ListItems';

export const List = () => {
  const [data,setData] = useState(
    [
      {
        id: 1,
        name: "Loading",
        last_message: "-----",
        time: "--",
        profile_image: ""
      },
      
    ]
  )

  async function getusers() {
    const response = await fetch("https://picoback.vercel.app/api/users")
    const data = await response.json()
    setData(data.Users)
  }
  useEffect(()=>{
    getusers()
  },[])

  return (
    <div className='ListArea'>
      <h2 className='ml-6 mt-3 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
      <div className='profile pb-4'>
      {data.map((item)=>{
        return (
          <ListItems key={item.id} username={item.name} image={item.profile_picture} last_message={item.last_message}  time={item.time} />
        )
      })}
      </div>
    </div>
  );
}

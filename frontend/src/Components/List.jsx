import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import ListItems from './ListItems';

export const List = () => {
  const [data,setData] = useState(
    [
      {
        "id": 1,
        "gender": "female",
        "date_of_birth": "2002-04-26T00:00:00",
        "job": "Herbalist",
        "city": "Humphreyfurt",
        "zipcode": "79574",
        "latitude": 13.032103,
        "profile_picture": "https://api.slingacademy.com/public/sample-users/1.png",
        "first_name": "Kayla",
        "email": "kayla.lopez.1@slingacademy.com",
        "last_message": "hii",
        "phone": "+1-697-415-3345x5215",
        "street": "3388 Roger Wells Apt. 010",
        "state": "Vermont",
        "country": "Jordan",
        "time": "10:01AM"
      },
      
    ]
  )

  async function getusers() {
    const response = await fetch("https://picoback.vercel.app/api/users")
    const data = await response.json()
    console.log(data);
    // setData(data.users)
  }
  useEffect(()=>{
    getusers()
  },[])

  return (
    <div className='ListArea'>
      <h2 className='ml-6 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
      <div className='profile'>
      {data.map((num)=>{
        console.log(num.first_name)
        return (
          <ListItems username={num.first_name} image={num.profile_picture} last_message={num.last_message}  time={num.time} />
        )
      })}
      </div>
    </div>
  );
}

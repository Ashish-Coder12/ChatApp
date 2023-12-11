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
      {
        "id": 2,
        "gender": "female",
        "date_of_birth": "1924-05-14T00:00:00",
        "job": "Technical author",
        "city": "West Angelaside",
        "zipcode": "44459",
        "latitude": 51.5214995,
        "profile_picture": "https://api.slingacademy.com/public/sample-users/2.png",
        "first_name": "Tina",
        "email": "tina.patrick.2@slingacademy.com",
        "last_message": "hello",
        "phone": "800-865-4932",
        "street": "4564 Gamble Light Suite 885",
        "state": "Kansas",
        "country": "Greenland",
        "time": "10:03AM"
      },
      {
        "id": 3,
        "gender": "female",
        "date_of_birth": "1998-04-23T00:00:00",
        "job": "Psychologist, occupational",
        "city": "South Maria",
        "zipcode": "69755",
        "latitude": 61.273996,
        "profile_picture": "https://api.slingacademy.com/public/sample-users/3.png",
        "first_name": "Brittany",
        "email": "brittany.bradford.3@slingacademy.com",
        "last_message": "Happy Birthday",
        "phone": "205-439-1326",
        "street": "0193 Amy Isle",
        "state": "Indiana",
        "country": "Micronesia",
        "time": "10:05AM"
      },
      {
        "id": 4,
        "gender": "female",
        "date_of_birth": "1987-12-02T00:00:00",
        "job": "Proofreader",
        "city": "Danaberg",
        "zipcode": "22397",
        "latitude": -75.9252065,
        "profile_picture": "https://api.slingacademy.com/public/sample-users/4.png",
        "first_name": "Lisa",
        "email": "lisa.thomas.4@slingacademy.com",
        "last_message": "Oyo chalo",
        "phone": "(660)262-7257",
        "street": "3500 Miller Springs Suite 728",
        "state": "Connecticut",
        "country": "Sudan",
        "time": "10:06AM"
      },
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
      }
    ]
  )

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

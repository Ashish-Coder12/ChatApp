import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import ListItems from './ListItems';

export const List = () => {
  const [data, setData] = useState(null)

  async function getusers() {
    const response = await fetch("https://picoback.vercel.app/api/users")
    const data = await response.json()
    setData(data.Users)
  }
  useEffect(() => {
    setTimeout(() => {
    getusers()
    }, 500);
  }, [])

  return (
    <div className='ListArea'>
      <h2 className='ml-6 mt-3 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
      {data == null ?
        <div className='profile pb-4'>
          <Skeletonloading />
          <Skeletonloading />
          <Skeletonloading />
          <Skeletonloading />
          <Skeletonloading />
        </div>
        :
        <div className='profile pb-4'>
          {data.map((item) => {
            return (
              <ListItems key={item.id} username={item.name} image={item.profile_picture} last_message={item.last_message} time={item.time} />
            )
          })}
        </div>
      }

    </div>
  );
}

function Skeletonloading() {
  return (
    <>
    <div class="card is-flex is-align-items-center is-justify-content-space-between px-3 py-5">
      <div className='is-flex '>
        <div class="avatar-skeleton loaderanimation mr-3"></div>
        <div className='is-flex is-flex-direction-column is-justify-content-space-around'>
          <div class="first-loader loaderanimation"></div>
          <div class="second-loader loaderanimation"></div>
        </div>
      </div>
      <div class="third-loader loaderanimation"></div>
    </div>
    </>

  )

}

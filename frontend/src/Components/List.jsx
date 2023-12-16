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
    // getusers()
  }, [5000])

  return (
    <div className='ListArea'>
      <h2 className='ml-6 mt-3 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
      {data == null ?
        <>
          <Skeletonloading />
        </>
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
    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>

    <div class="card">
      <div class="avatar-skeleton"></div>
      <div class="first-loader"></div>
      <div class="second-loader"></div>
      <div class="third-loader"></div>
    </div>
    </>

  )

}

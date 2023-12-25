import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [username,setusername] = useState("")
  const [password,setPassword]= useState("")
  async function login() {
    // alert(username + "," +password)
    const response = await fetch("http://picoback.vercel.app/authenticate",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "username":username,
        "password":password
      })
    })
    const data = await response.json()
    console.log(data)
    // localStorage.setItem("unique_id","1")
    // navigate('/');
  }
  
  return (
    <div className='centerDiv'>
        <h1 className='headingfont fontresize'>Weclome back to <span className='stylefont'>Pico</span></h1>
        <p >Personalized Instant Connectivity Option</p>
        <div className='GoogleButton' > <FaGoogle size={14} color='white' className='mr-3'/> Continue with google</div>
        <p className='my-2' >or</p>
        <div>
            <h4>User Name</h4>
            <input className='SignupInput' value={username} type="text" placeholder='UserName' onChange={(e)=>setusername(e.target.value)}/>
            <h4>Password</h4>
            <input className='SignupInput' value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='BlueButton' onClick={()=>login()} >Login</div>
    </div>
  )
}

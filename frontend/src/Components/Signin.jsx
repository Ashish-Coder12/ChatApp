import React from 'react'
import { FaGoogle } from "react-icons/fa";
export default function Signin() {
  return (
    <div className='centerDiv'>
        <h1 className='headingfont fontresize'>Weclome back to <span className='stylefont'>Pico</span></h1>
        <p >Personalized Instant Connectivity Option</p>
        <div className='GoogleButton' > <FaGoogle size={14} color='white' className='mr-3'/> Continue with google</div>
        <p className='my-2' >or</p>
        <div>
            <h4>User Name</h4>
            <input className='SignupInput' type="text" placeholder='UserName'/>
            <h4>Password</h4>
            <input className='SignupInput' type="password" placeholder='Password'/>
            
        </div>
        <div className='BlueButton' >Login</div>
    </div>
  )
}

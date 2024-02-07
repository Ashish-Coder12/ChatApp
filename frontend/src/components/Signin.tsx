import React, { ReactElement, useEffect } from 'react'
import './form.css';


const Signgin = ():ReactElement => {
const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    setShowPassword(false)
  },[])

  return (
    <div className='Joining'>
      <form className='sign-in-form'> 
      <h2 className='title'>Sign In</h2>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" placeholder='Your username' />
        <label htmlFor="password">Password</label>
        <input type={showPassword ? "text" : "password"} name="password" id='password' placeholder='password'/>
        {/* <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button> */}
        <div className='remember'><span><input className='check' type="checkbox" /> <b>Remember me</b></span> <span className='forgot'><a href="/">Forgot password?</a></span></div>
        <button type='submit'>Sign In</button>
       {/* <span className='no-account'>Don't have an account? <a href="/">Sign In</a></span> */}
      </form>
    </div>
  )
}

export default Signgin

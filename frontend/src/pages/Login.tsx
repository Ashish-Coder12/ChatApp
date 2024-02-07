import React from 'react'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

function login() {
  const [page, setPage] = React.useState("Signup")
  return (
    <div className='login-page'>
      <div className='login-switch '>
        <div className={page == "Signin" ?"Borderbottom":""} onClick={() => setPage("Signin")}><b>SignIn</b></div>
        <div className={page == "Signup" ?"Borderbottom":""} onClick={() => setPage("Signup")}><b>SignUp</b></div>
      </div>
      {page === "Signup" ? <Signup /> : <Signin />}
    </div>
  )
}

export default login
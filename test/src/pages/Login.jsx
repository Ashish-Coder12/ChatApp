import React, { useState } from 'react'
import Signup from '../Components/Signup'
import Signin from '../Components/Signin'

function Login() {
  const [page,setPage] = useState("login")
  function name(params) {
     change()
  }
  return (
    <div className='backgroundimage '>
      <div className='login ' > 
      <div className='is-flex mb-4 mt-6'>
        <h2 className={page=="login"?'mr-3 textwhite borderbottom':'mr-3 textwhite'} onClick={()=>setPage("login")}>Login</h2>
        <h2 className={page!="login"?'ml-3 textwhite borderbottom':'ml-3 textwhite'} onClick={()=>setPage("SignUp")}>Sign up</h2>
      </div>
      <div className='LoginBox'>
        {page == "login" ?
        <Signin/> :
        <Signup/>
        }
      
      </div>
    </div>
    </div>
  )
}

export default Login
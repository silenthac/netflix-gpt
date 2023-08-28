import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSigninform,setSigninForm] = useState(true);

  const toggleSignInForm = () =>{
    setSigninForm(!isSigninform);

  }
  return (
   
    <div >
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
      </div>
      <form  className='absolute w-3/12 bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80'>
      <h1 className='font-bold text-3xl py-4' >{isSigninform?"Sign In":"Sign Up"}</h1>
      {
        !isSigninform&& <input type='text' placeholder='Full Name' className='my-4 p-2 w-full'/>
      }
      <input type='text' placeholder='Email' className='my-4 p-2 w-full'/>
      <input type='text' placeholder='Password' className='my-4 p-2 w-full'/>
      <button className='p-4 my-6 bg-red-500 w-full rounded-lg' >Submit</button>
      <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSigninform?"New to Netflix?Sign Up Now":"Already registered....... click here to sign in"}</p>
    </form>
    </div>
  )
}

export default Login
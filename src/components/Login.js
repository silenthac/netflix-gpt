import React, { useRef, useState } from 'react'
import Header from './Header'
import {  checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
// import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { AVATAR } from '../utils/const';



const Login = () => {

const [isSigninform,setSigninForm] = useState(true);
const [msg,setmsg]= useState(null);
const email = useRef(null)
const password  =useRef(null);
const name = useRef(null)

const dispatch = useDispatch()

const Navigate = useNavigate()





  const toggleSignInForm = () =>{
    setSigninForm(!isSigninform);

  }

  const handleButtonClick = () =>{
    //first of all validate  email and password

    

    
   const msg = (checkValidData(email.current.value,password.current.value))
   setmsg(msg)

   if(msg)
   {
    return;
   }

   if(!isSigninform)
   {
    //Sign up logic
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   

updateProfile(user, {
  displayName: name.current.value , photoURL: AVATAR
}).then(() => {
  // Profile updated!
  // ...

  const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))


 
}).catch((error) => {
  // An error occurred
  // ...

  setmsg(error.message)
});
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmsg(errorCode+"-"+errorMessage)
    // ..
  });
   
   }
   else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmsg(errorCode+"-"+errorMessage)
  });
    
   }

   
  }
  return (
   
    <div >
      <Header/>
      <div className='absolute'>
      <img className="h-screen md:h-max object-cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
      </div>
      <form  
      onSubmit={(e)=>e.preventDefault()} 
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 
      className='font-bold text-3xl py-4' >
        {isSigninform?"Sign In":"Sign Up"}
        </h1>
      {
        !isSigninform&& <input type='text' ref={name} placeholder='Full Name' className='my-4 p-2 w-full  bg-gray-800'/>
      }
      <input
       ref={email} 
       type='text' 
       placeholder='Email'
        className='my-4 p-2 w-full bg-gray-800'/>
      <input
       ref={password}
        type='password'
         placeholder='Password'
          className='my-4 p-2 w-full bg-gray-800'/>
      <p 
      className='text-red-500 font-bold py-2'>
        {msg}
        </p>
      <button  
       className='p-4 my-6 bg-red-500 w-full rounded-lg'
        onClick={handleButtonClick} >
          Submit
          </button>
      <p 
      className='py-4 cursor-pointer' 
       onClick={toggleSignInForm}>
        {isSigninform?"New to Netflix?Sign Up Now":"Already registered?Sign in"}
        </p>
    </form>
    </div>
  )
}

export default Login